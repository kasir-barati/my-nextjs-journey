import { useContext } from 'react';
import { PathnamesContext } from './pathnames.context';

export const usePathnames = () => useContext(PathnamesContext);
