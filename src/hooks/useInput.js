import {useState, useCallback} from 'react';

export const useInput = initialState => {
  const [input, setInput] = useState(initialState);
  const onChangeInput = useCallback(val => setInput(val));
  return [input, onChangeInput];
};
