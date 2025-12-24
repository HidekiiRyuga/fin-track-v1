import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  records: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
// Changed name to GlobalProvider to match your App.js import
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteRecord(id) {
    dispatch({
      type: 'DELETE_RECORD', // Ensure AppReducer.js has a case for this exact string
      payload: id
    });
  }

  function addRecord(record) {
    dispatch({
      type: 'ADD_RECORD', // Ensure AppReducer.js has a case for this exact string
      payload: record
    });
  }

  return (
    <GlobalContext.Provider value={{
      records: state.records,
      deleteRecord,
      addRecord
    }}>
      {children}
    </GlobalContext.Provider>
  );
}