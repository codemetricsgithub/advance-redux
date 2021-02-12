import { SAVE_COMMENT } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}

// const initialState = {};

// export default (state = initialState, { type, payload }) => {
//   switch (type) {
//     case SAVE_COMMENT:
//       return { ...state, ...payload };

//     default:
//       return state;
//   }
// };
