import { FAILURE, FETCHING, SUCCESS } from "../actions"
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
}
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        characters: [],
        fetching: true,
        error: ""
      }
    case SUCCESS:
      return {
        ...state,
        characters: action.payload.data.results,
        fetching: false,
        error: ""
      }
    case FAILURE:
      return {
        ...state,
        characters: [],
        fetching: false,
        error: action.payload
      }
    default:
      return state
  }
}
