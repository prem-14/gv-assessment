import React, { useReducer } from 'react'
import axios from 'axios'
import JobContext from './jobContext'
import JobReducer from './jobReducer'
import { GET_ALL_JOBS, GET_SINGLE_JOB, CLEAR_RESPONSE, RESPONSE_STATUS, CLEAR_SINGLE_JOB } from './jobTypes'

const JobState = (props) => {
  const initialState = {
    responseStatus: null,
    single_job: {},
    all_jobs: [],
  }

  const [state, dispatch] = useReducer(JobReducer, initialState)

  const getAllJobs = async (queryParams) => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_API_URL}/jobs`, {
        params: queryParams || {
          orderby: 'id',
          order: 'desc',
        },
      })
      if (data.status === 200) {
        dispatch({
          type: GET_ALL_JOBS,
          payload: data.data,
        })
      }
    } catch (e) {
      console.log(e)
      // Need to handle ( show notification)
    }
  }

  const getSingleJob = async (id) => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_API_URL}/jobs/${id}`)
      if (data.status === 200) {
        dispatch({
          type: GET_SINGLE_JOB,
          payload: data.data,
        })
      }
    } catch (e) {
      console.log(e)
      // Need to handle ( show notification)
    }
  }

  const addJob = async (formData) => {
    try {
      const data = await axios.post(`${process.env.REACT_APP_API_URL}/jobs`, formData)
      console.log(data)
      if (data.status === 201) {
        dispatch({
          type: RESPONSE_STATUS,
          payload: {
            status: data.status,
            message: 'Job added successfully',
            data: data.data,
            from: 'jobadded',
          },
        })
      }
    } catch (e) {
      console.log(e)
      // Need to handle ( show notification)
    }
  }

  const editJob = async (formData, id) => {
    try {
      const data = await axios.put(`${process.env.REACT_APP_API_URL}/jobs/${id}`, formData)
      if (data.status === 200) {
        dispatch({
          type: RESPONSE_STATUS,
          payload: {
            status: data.status,
            message: 'Job edited successfully',
            data: data.data,
            from: 'jobedited',
          },
        })
      }
    } catch (e) {
      console.log(e)
      // Need to handle ( show notification)
    }
  }

  const deleteJob = async (id) => {
    try {
      const data = await axios.delete(`${process.env.REACT_APP_API_URL}/jobs/${id}`)
      if (data.status === 200) {
        dispatch({
          type: RESPONSE_STATUS,
          payload: {
            status: data.status,
            message: 'Job deleted successfully',
            data: data.data,
            from: 'jobdeleted',
          },
        })
      }
    } catch (e) {
      console.log(e)
      // Need to handle ( show notification)
    }
  }

  const clearSingleJob = () =>
    dispatch({
      type: CLEAR_SINGLE_JOB,
    })

  const clearResponse = () =>
    dispatch({
      type: CLEAR_RESPONSE,
    })

  return (
    <JobContext.Provider
      value={{ ...state, getAllJobs, addJob, getSingleJob, editJob, deleteJob, clearSingleJob, clearResponse }}
    >
      {props.children}
    </JobContext.Provider>
  )
}

export default JobState
