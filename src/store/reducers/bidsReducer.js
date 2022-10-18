import {Action} from '../actions';
import {serializeData} from '../../utils';
import {CONVERSION_TYPE} from '../../constants';

const initialState = {
  conversionType: CONVERSION_TYPE.BTC_USD,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_CONVERSION_TYPE:
      return {
        ...state,
        conversionType: action.conversionType,
      };
    case Action.SET_BIDS:
      return {
        ...state,
        data: serializeData(action.data, state.conversionType),
      };
    case Action.CLEAR_DATA:
      return {
        ...state,
        conversionType: CONVERSION_TYPE.BTC_USD,
        data: [],
      };
    default:
      return state;
  }
};
