import { ReactNode, useState, useEffect } from 'react';
import { FORM_FACTOR_UPPER_BOUNDS } from '../Constants/FormFactorMapping';
import { isMDContext, isSMContext, isXSContext } from './useFormFactor';

const checkIfXS = () => window.innerWidth < FORM_FACTOR_UPPER_BOUNDS.XS;
const checkIfSM = () => window.innerWidth < FORM_FACTOR_UPPER_BOUNDS.SM;
const checkIfMD = () => window.innerWidth < FORM_FACTOR_UPPER_BOUNDS.MD;

interface FormFactorContextProps {
  children: ReactNode;
}

export default function FormFactorContext({
  children,
}: FormFactorContextProps) {
  const [isXS, setIsXS] = useState(checkIfXS());
  const [isSM, setIsSM] = useState(checkIfSM());
  const [isMD, setIsMD] = useState(checkIfMD());

  // Window resize event listener
  useEffect(() => {
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
}
