import { createContext } from 'react';

export interface IPathnamesContext {
    getPathnames: () => string[];
    syncPathnames: (newPathnames: string[]) => void;
}
export const PathnamesContext = createContext<IPathnamesContext>(
    {} as IPathnamesContext,
);
