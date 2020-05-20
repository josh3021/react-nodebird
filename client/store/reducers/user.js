import {
  HYDRATE
} from "next-redux-wrapper";

export const initialState = {
  isLoggedIn: false
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
  type: LOG_OUT,
  data: {}
}

const reducer = (state = initialState, action) => {
  console.log(`action.payload: ${JSON.stringify(action.payload)}`)
  switch (action.type) {
    case HYDRATE: {
      return {
        ...state
      }
    }
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        ...action.data
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
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
