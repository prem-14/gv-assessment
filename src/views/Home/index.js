import React, { useContext, useEffect, useState, Fragment } from 'react'
import jobContext from '../../context/job/jobContext'
import Card from '../../components/Card'
import JobForm from './JobForm'
import Button from '../../components/Button'

const Home = () => {
  let [isOpen, setIsOpen] = useState(false)
  const { all_jobs, getAllJobs } = useContext(jobContext)

  useEffect(() => {
    getAllJobs()
  }, [])

  return (
    <div>
      <Button
        label='Create Job'
        variant='contained'
        onClick={() => setIsOpen(true)}
        className='rounded-md bg-primaryColor p-2 text-white m-2'
      />

      <div className='grid grid-cols-1 xl:grid-cols-2  gap-8 mx-auto w-[90vw] my-10'>
        {all_jobs?.length
          ? all_jobs.map((job, i) => (
              <Fragment key={i}>
                <Card data={job} />
              </Fragment>
            ))
          : 'Currently no jobs to show'}
      </div>

      {isOpen && <JobForm isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  )
}

export default Home
