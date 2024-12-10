import React, { createContext, useReducer, useState } from 'react';

export const Korzinka = createContext();

const initialState={
    data:JSON.parse(localStorage.getItem("shop")) || []
  }
  
  const reducer =(state , {type , value,id})=>{
    
    switch (type) {
        case "add":
            const existingItemIndex = state.data.findIndex((item) => item.id === value.id);
          
            if (existingItemIndex !== -1) {
              const updatedData = [...state.data];
              updatedData[existingItemIndex].count += 1;
              localStorage.setItem("shop", JSON.stringify(updatedData));
              return { data: updatedData };
            } else {
              const newItem = { ...value, count: 1 };
              const newData = { data: [...state.data, newItem] };
              localStorage.setItem("shop", JSON.stringify(newData.data));
              return newData;
            }
          
        case "delete":
          const deleteValue = state.data.filter((item) => item.id !== idd)
          localStorage.setItem("shop", JSON.stringify(deleteValue))
          return {
            ...state, 
            data: deleteValue, 
        };
      default:
        break;   
    }
  }

  export const MyProvider = ({ children }) => {
      const [state , dispatch] = useReducer(reducer , initialState)

  return (
    <Korzinka.Provider value={{ state, dispatch }}>
      {children}
    </Korzinka.Provider>
  );
};
