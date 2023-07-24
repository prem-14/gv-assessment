import { useContext, useEffect, useState } from 'react'
import FormInput from '../../components/FormInput'
import { form1, form2 } from './formSteps'
import jobContext from '../../context/job/jobContext'
import Modal from '../../components/Dialog'

const JobForm = (props) => {
  const { id, status, isOpen, setIsOpen } = props
  const [values, setValues] = useState({
    title: '',
    company: '',
    industry: '',
    location: '',
    remoteType: '',
    experienceMin: '',
    experienceMax: '',
    salaryMin: '',
    salaryMax: '',
    totalEmployee: '',
    applyType: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)

  const { single_job, addJob, editJob, getSingleJob, getAllJobs, clearSingleJob, responseStatus, clearResponse } =
    useContext(jobContext)

  const handleStepper = (inputs, currentStep) => {
    const foundError = inputs.find((input) => input.require && !values[input.name])
    if (foundError) {
      setSubmitted(true)
    } else {
      if (currentStep === 2) {
        status === 'edit' ? editJob(values, id) : addJob(values)
      } else {
        setStep(currentStep + 1)
      }
    }
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  // Handling edit form functionality
  useEffect(() => {
    if (id && status === 'edit') {
      getSingleJob(id)
    }
    return () => {
      clearSingleJob()
    }
  }, [id])

  useEffect(() => {
    if (Object.keys(single_job).length && status === 'edit') {
      Object.keys(single_job).forEach((field) => {
        if (values.hasOwnProperty(field)) {
          setValues((values) => ({ ...values, [field]: single_job[field] }))
        }
      })
    }
  }, [single_job])

  useEffect(() => {
    if (responseStatus && (responseStatus?.status === 200 || responseStatus?.status === 201)) {
      if (['jobadded', 'jobedited'].includes(responseStatus?.from)) {
        getAllJobs()
        clearResponse()
        setIsOpen(false)
        setStep(1)
      }
    }
  }, [responseStatus])

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>
        {step === 1 ? (
          <>
            <div className='flex justify-between mb-6 font-medium text-lg'>
              <p>Create a job</p>
              <p>Step 1</p>
            </div>
            <div className='grid grid-cols-2 gap-x-6'>
              {form1.map((input) => (
                <div className={input.className} key={input.name}>
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    submitted={submitted}
                    onChange={onChange}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => handleStepper(form1, 1)}
              className='bg-primaryColor py-[2px] px-2 text-white border rounded-md block ml-auto mt-[76px]'
            >
              Next
            </button>
          </>
        ) : step === 2 ? (
          <>
            <div className='flex justify-between mb-6 font-medium text-lg'>
              <p>Create a job</p>
              <p>Step 2</p>
            </div>
            <div className='grid grid-cols-2 gap-x-6'>
              {form2.map((input) => (
                <div className={input.className} key={input.name}>
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    submitted={submitted}
                    onChange={onChange}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => handleStepper(form2, 2)}
              className='bg-primaryColor py-[3px] px-2 text-white border rounded-md block ml-auto mt-[76px]'
            >
              Save
            </button>
          </>
        ) : null}
      </div>
    </Modal>
  )
}

export default JobForm
