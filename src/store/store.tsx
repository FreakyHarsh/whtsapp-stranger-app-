import React, { FC, useContext, useReducer } from 'react';
import { State } from '../types/state';
import { Actions } from '../types/actions';

const initialState: State = {
  phoneNumber: '',
  message: '',
};

const Context = React.createContext({
  state: initialState,
  dispatch: (_: { type: string; payload?: any }) => {},
});

const reducer = (state: State, action: { type: string; payload?: any }): State => {
  switch (action.type) {
    case Actions.setPhoneNumber:
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case Actions.setMessage:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export const AppState: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export const useStore = () => useContext(Context);
