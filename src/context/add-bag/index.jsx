import React, { createContext, useReducer, useState } from 'react';

export const Korzinka = createContext();

const initialState={
    data:JSON.parse(localStorage.getItem("shop")) || []
  }
  
  const reducer =(state , {type , value,idd})=>{
    
      console.log(state.data, "BU state");
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
        
        case "increment":
            const incrementedData = state.data.map((item) =>
              item.id === idd ? { ...item, count: item.count + 1,price:item.price * item.count  } : item
            );
            localStorage.setItem("shop", JSON.stringify(incrementedData));
            return { ...state, data: incrementedData };
      
          case "decrement":
            const decrementedData = state.data.map((item) =>
              item.id === idd && item.count > 1
                ? { ...item, count: item.count - 1 }
                : item
            );
            localStorage.setItem("shop", JSON.stringify(decrementedData));
            return { ...state, data: decrementedData };
          case "isLiked":
            
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
