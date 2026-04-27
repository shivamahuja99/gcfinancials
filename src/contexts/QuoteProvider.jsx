import { useState } from 'react';
import { QuoteContext } from './QuoteContext';

export const QuoteProvider = ({ children }) => {
  const [quoteData, setQuoteData] = useState({
    age: '',
    startDate: '',
    endDate: '',
    duration: 365,
    coverageAmount: '100k',
    deductible: '0',
    hasPreExisting: false,
    medicalConditions: [],
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    selectedPlan: null,
  });

  const updateQuoteData = (newData) => {
    setQuoteData(prev => ({ ...prev, ...newData }));
  };

  return (
    <QuoteContext.Provider value={{ quoteData, updateQuoteData }}>
      {children}
    </QuoteContext.Provider>
  );
};
