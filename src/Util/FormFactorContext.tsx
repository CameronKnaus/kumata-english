import {
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react';
import { FORM_FACTOR_UPPER_BOUNDS } from '../Constants/FormFactorMapping';

const isXSContext = createContext<boolean>(false);
const isSMContext = createContext<boolean>(false);
const isMDContext = createContext<boolean>(false);

export function useFormFactor() {
  return {
    XS: useContext(isXSContext),
    SM: useContext(isSMContext),
    MD: useContext(isMDContext),
  };
}

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
