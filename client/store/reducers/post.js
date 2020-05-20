import {
  HYDRATE
} from "next-redux-wrapper"

export const initialState = {
  mainPosts: []
}

export const ADD_POST = 'ADD_POST'
export const ADD_DUMMY = "ADD_DUMMY"

export const addPost = {
  type: ADD_POST
}

export const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: "hwllo",
    UserId: 1,
    Users: {
      nickname: '제로초'
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case HYDRATE:
    //   return Object.assign({}, state, ...action.payload);
    case HYDRATE:
      return {
        ...state
      };
    case ADD_POST: {
      return {
        ...state
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.payload, ...state.mainPosts],
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
