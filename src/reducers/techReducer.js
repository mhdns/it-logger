import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING
} from '../actions/types';

const initialState = {
  techs: [],
  lodaing: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload]
      };
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((t) => t.id !== action.payload),
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
