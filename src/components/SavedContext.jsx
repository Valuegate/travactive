// src/context/SavedContext.jsx
import React, { createContext, useState } from "react";

export const SavedContext = createContext();

export const SavedProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState([]);

  const addSavedItem = (item) => {
    // Avoid duplicates
    setSavedItems((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeSavedItem = (id) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <SavedContext.Provider
      value={{ savedItems, addSavedItem, removeSavedItem }}
    >
      {children}
    </SavedContext.Provider>
  );
};
