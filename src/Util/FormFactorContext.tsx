import React, { FC, ReactNode } from 'react';
import { FORM_FACTOR_UPPER_BOUNDS } from '../Constants/FormFactorMapping';

const isXSContext = React.createContext<boolean>(false);
const isSMContext = React.createContext<boolean>(false);
const isMDContext = React.createContext<boolean>(false);

export function useFormFactor() {
  return {
    XS: React.useContext(isXSContext),
    SM: React.useContext(isSMContext),
    MD: React.useContext(isMDContext),
  };
}

const checkIfXS = () => window.innerWidth < FORM_FACTOR_UPPER_BOUNDS.XS;
const checkIfSM = () => window.innerWidth < FORM_FACTOR_UPPER_BOUNDS.SM;
const checkIfMD = () => window.innerWidth < FORM_FACTOR_UPPER_BOUNDS.MD;

interface FormFactorContextProps {
  children: ReactNode;
}

const FormFactorContext: FC<FormFactorContextProps> = ({ children }) => {
  const [isXS, setIsXS] = React.useState(checkIfXS());
  const [isSM, setIsSM] = React.useState(checkIfSM());
  const [isMD, setIsMD] = React.useState(checkIfMD());

  // Window resize event listener
  React.useEffect(() => {
    // Handler for resize event
    const resizeHandler = () => {
      setIsXS(checkIfXS());
      setIsSM(checkIfSM());
      setIsMD(checkIfMD());
    };

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <isXSContext.Provider value={isXS}>
      <isSMContext.Provider value={isSM}>
        <isMDContext.Provider value={isMD}>{children}</isMDContext.Provider>
      </isSMContext.Provider>
    </isXSContext.Provider>
  );
};

export default FormFactorContext;
