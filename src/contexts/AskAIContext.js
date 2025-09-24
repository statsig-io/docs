import React, { createContext, useContext, useState } from 'react';

const AskAIContext = createContext();

export const useAskAI = () => {
  const context = useContext(AskAIContext);
  if (!context) {
    throw new Error('useAskAI must be used within an AskAIProvider');
  }
  return context;
};

export const AskAIProvider = ({ children }) => {
  const [isAskAIOpen, setIsAskAIOpen] = useState(false);

  return (
    <AskAIContext.Provider value={{ isAskAIOpen, setIsAskAIOpen }}>
      {children}
    </AskAIContext.Provider>
  );
};
