import { createContext, useContext } from 'react';

export const isXSContext = createContext<boolean>(false);
export const isSMContext = createContext<boolean>(false);
export const isMDContext = createContext<boolean>(false);

export function useFormFactor() {
  return {
    XS: useContext(isXSContext),
    SM: useContext(isSMContext),
    MD: useContext(isMDContext),
  };
}
