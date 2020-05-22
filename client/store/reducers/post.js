import {
  HYDRATE
} from "next-redux-wrapper"

export const initialState = {
  mainPosts: [{
    User: {
      id: 1,
      nickname: "제로초",
    },
    content: "첫 번째 게시글",
    createdAt: "2020-05-19",
    img: "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg",
  }, ],
  imagePaths: []
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
