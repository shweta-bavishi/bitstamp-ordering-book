import {Action} from './actionTypes';

export const changeConversionType = conversionType => ({
  type: Action.CHANGE_CONVERSION_TYPE,
  conversionType,
});

export const setBids = data => ({
  type: Action.SET_BIDS,
  data,
});

export const clearData = () => ({
  type: Action.CLEAR_DATA,
});
