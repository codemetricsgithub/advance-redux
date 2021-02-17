// export default function ({ dispatch }) {
//   return function (next) {
//     return function (action) {};
//   };
// }
// //or  refactoring  function into aerow function
// export default ({ dispatch }) => (next) => {
//   (action) => {};
// };

//or
// export default ({ dispatch },next,action)  => {

// };
//or

export default ({ dispatch }) => (next) => (action) => {
  // here logic
  //Check to see if the action has a Promise  on  its payload property
  //if it does ,then wait for it resolve
  // if it does't then send to action  on the next  middleware

  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  // we want to wait for the promise to resolve
  //(get it data !!) and then create a new action
  //with that data and dispatch it

  action.payload.then(function (response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
