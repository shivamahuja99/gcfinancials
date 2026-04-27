import { useContext } from 'react';
import { QuoteContext } from '../contexts/QuoteContext';

export const useQuote = () => useContext(QuoteContext);
