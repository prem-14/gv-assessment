import { GET_ALL_JOBS, GET_SINGLE_JOB, CLEAR_RESPONSE, RESPONSE_STATUS, CLEAR_SINGLE_JOB } from './jobTypes'

const JobReducer = (state, action) => {
  switch (action.type) {
    case RESPONSE_STATUS:
      return {
        ...state,
        responseStatus: action.payload,
      }
    case GET_ALL_JOBS:
      return {
        ...state,
        all_jobs: action.payload,
      }
    case GET_SINGLE_JOB:
      return {
        ...state,
        single_job: action.payload,
      }
    case CLEAR_SINGLE_JOB:
      return {
        ...state,
        single_job: {},
      }
    case CLEAR_RESPONSE:
      return {
        ...state,
        responseStatus: '',
      }
    default:
      return state
  }
}

export default JobReducer
