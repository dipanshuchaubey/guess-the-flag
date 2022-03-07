import { GET_SCORES, SET_SCORE, RESET_SCORE } from '../types';

const initialState = {
  score: 0,
  questionsAttempted: 0,
  correct: 0,
  wrong: 0
};

const scoreReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case GET_SCORES:
      return state;

    case SET_SCORE:
      return {
        ...state,
        score: action.payload.correct ? state.score + 1 : state.score,
        questionsAttempted: state.questionsAttempted + 1,
        correct: action.payload.correct ? state.correct + 1 : state.correct,
        wrong: action.payload.correct ? state.wrong : state.wrong + 1
      };

    case RESET_SCORE:
      return {};

    default:
      return state;
  }
};

export default scoreReducer;
