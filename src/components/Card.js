import React, { useContext, useEffect, useState } from 'react'
import Button from './Button'
import { PencilIcon } from '@heroicons/react/24/solid'
import { TrashIcon } from '@heroicons/react/24/solid'
import JobForm from '../views/Home/JobForm'
import jobContext from '../context/job/jobContext'

const Card = ({ data }) => {
  const { deleteJob, responseStatus, getAllJobs, clearResponse } = useContext(jobContext)
  const [isOpen, setIsOpen] = useState(false)

  const handleDeleteJob = () => {
    deleteJob(data.id)
  }

  useEffect(() => {
    if (responseStatus && responseStatus?.status === 200) {
      if (responseStatus?.from === 'jobdeleted') {
        getAllJobs()
        clearResponse()
      }
    }
  }, [responseStatus])

  return (
    <>
      <div className='bg-cardColor flex items-start py-4 px-6 w-full max-w-[830px] m-auto border border-cardBorderColor rounded-md'>
        <img src='/card_logo.PNG' alt='card_logo' width={50} className='rounded-md mr-2' />
        <div>
          <div className='mb-6'>
            <h2 className='text-xl font-medium'>{data.title}</h2>
            <p className='font-medium'>
              {data.company} - {data.industry}
            </p>
            <p className='text-placeHolderColor'>
              {data.location && data.location}{' '}
              {data.location && data.remote_type ? `(${data.remote_type})` : data.remote_type ? data.remote_type : null}
            </p>
          </div>
          <div className='mb-6'>
            <p className='mb-2'>Part-Time ( 9.00 am - 5.00 pm IST )</p>
            {data.experienceMin && data.experienceMax && (
              <p className='mb-2'>
                Experience ({data.experienceMin}-{data.experienceMax} years)
              </p>
            )}
            {data.salaryMin && data.salaryMax && (
              <p className='mb-2'>
                INR (₹) {data.salaryMin} - {data.salaryMax} / month
              </p>
            )}
            {data.totalEmployee && <p>{data.totalEmployee} employees</p>}
          </div>
          <div>
            {data.applyType === 'quick_apply' ? (
              <Button
                label='Apply now'
                variant='contained'
                className='py-2 px-4'
                onClick={() => console.log('quick_apply')}
              />
            ) : data.applyType === 'external_apply' ? (
              <Button
                label='External apply'
                variant='outlined'
                className='py-2 px-4'
                onClick={() => console.log('external_apply')}
              />
            ) : (
              <Button label='Apply' variant='contained' className='py-2 px-4' onClick={() => console.log('apply')} />
            )}
          </div>
        </div>
        <div className='ml-auto flex'>
          <PencilIcon className='h-5 w-5 text-primaryColor mr-3 cursor-pointer ' onClick={() => setIsOpen(true)} />
          <TrashIcon className='h-5 w-5 text-errorColor cursor-pointer' onClick={handleDeleteJob} />
        </div>
      </div>
      {isOpen && <JobForm id={data.id} status={'edit'} isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  )
}

export default Card
