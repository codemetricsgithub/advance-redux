import { FETCH_COMMENTS, SAVE_COMMENT } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload, {}];

    case FETCH_COMMENTS:
      const tempDataHolds = action.payload.data.map(
        (TakeDataFromServer) => TakeDataFromServer.email
      );
      return [...state, ...tempDataHolds];
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
