import {
  HYDRATE
} from "next-redux-wrapper";

export const initialState = {
  isLoggedIn: false,
  user: {}
};

//액션의 이름
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT'

export const loginAction = {
  type: LOG_IN,
  data: {
    nickname: '제로초'
  }
}

export const logoutAction = {
  type: LOG_OUT
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return {
        ...state,
        ...action.payload
      }
    }
    case LOG_IN: {
      return {
        ...state,
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: {}
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default reducer;
