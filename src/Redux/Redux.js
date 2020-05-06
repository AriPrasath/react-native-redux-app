import {createStore} from 'redux';

let initialState = [
  {
    name: 'Eat',
    status: true,
  },
  {
    name: 'Sleep',
    status: false,
  },
];

const toReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      state.push(action.payload);
      console.log('Action payload', action.payload);
      break;

    case 'DELETE': {
      console.log('Delete :', action.payload);
      let newState = state.filter((item, index) => {
        if (index === action.payload) {
          return false;
        }
        return true;
      });
      //   let newState = state.filter((_item, index) => {
      //     if (index === action.payload) {
      //       return false;
      //     }
      //     return true;
      //   });
      return newState;
    }

    case 'MARK': {
      let newState = state.map((item, index) => {
        if (index === action.payload) {
          item.status = !item.status;
        }
        return item;
      });
      return newState;
    }
  }
  return state;
};
export const store = createStore(toReducer, initialState);

console.log('Initial Log', store.getState());

store.subscribe(() => {
  console.log('Change Log', store.getState());
});
