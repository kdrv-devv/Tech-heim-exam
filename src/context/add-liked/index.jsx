import  React, { createContext , useReducer } from "react";

export const Liked = createContext()

const initialState = {
    data:JSON.parse(localStorage.getItem("liked")) || []
}

const reducer = (state, { type, data }) => {
    switch (type) {
      case "toggleliked": {
        const isLiked = state.data.find((el) => el.id == data.id);
  
        const updated = isLiked
          ? state.data.filter((el) => el.id != data.id)
          : [...state.data, data];
  
        return { data: updated };
      }
  
      default:
        return state;
    }
  };
  
  export const LikedProvider = ({ children }) => {
      const [state , dispatch] = useReducer(reducer , initialState)
  return (
    <Liked.Provider value={{ state, dispatch }}>
      {children}
    </Liked.Provider>
  );
};