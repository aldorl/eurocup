import { INITIAL_STATE } from '../../common/app-const';
import {
  UPDATE_FILTER
} from '../actions/types';

const filterText = (state = INITIAL_STATE.filterText, action) => {
  switch(action.type) {
    case UPDATE_FILTER: {
      console.log(action);
      return action.filterText;
    }

    default: {
      return state;
    }
  }
};

export default filterText;
