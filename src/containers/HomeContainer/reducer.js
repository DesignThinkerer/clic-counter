import { INCREMENT, DECREMENT } from './constant';

export const initialState = {
  counter: 0,
};

export default function homeContainerReducer(state = initialState, action){
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
      case DECREMENT:
        return {
          ...state,
          counter: Math.max(state.counter - 1, 0), // Le compteur ne descend pas en dessous de 0
        }
    default:
      return state;
  }
}
