import { useEffect } from "react";
import useStore, { StoreType } from "../store/store";

const useApp = () => {
  const { functions, setFunctions, initialValue, setFinalOutput, setCardPositions } = useStore((state: StoreType) => state);

  const handleEquationChange = (id: number, equation: string) => {
    const updatedFunctions = functions.map((func) =>
      func.id === id ? { ...func, equation } : func
    );
    setFunctions(updatedFunctions);
  };

  const calculateFinalOutput = () => {
    let currentFunctionId: number | null = 1;
    let currentValue = initialValue;

    while (currentFunctionId !== null) {
      const currentFunction = functions.find(
        (func) => func.id === currentFunctionId
      );

      if (currentFunction) {
        const expression = currentFunction.equation
          .replace(/x/g, `(${currentValue.toString()})`)
          .replace("^", "**");

        currentValue = eval(expression);
        currentFunctionId = currentFunction.nextFunction;
      }
    }
    setFinalOutput(currentValue);
  };

  useEffect(() => {
    calculateFinalOutput();
  }, [initialValue]);

  useEffect(() => {
    const updateCardPositions = () => {
      const newPositions: { [key: number]: DOMRect } = {};
      functions.forEach((func) => {
        const element = document.getElementById(`function-card-${func.id}`);
        if (element) {
          newPositions[func.id] = element.getBoundingClientRect();
        }
      });
      const funcInput = document.getElementById("func-input");
      const finalInput = document.getElementById("func-output");
      if(funcInput && finalInput) {
        newPositions[0] = funcInput.getBoundingClientRect();
        newPositions[6] = finalInput.getBoundingClientRect();
      }
      
      setCardPositions(newPositions);
    };

    updateCardPositions();
    window.addEventListener('resize', updateCardPositions);
    return () => window.removeEventListener('resize', updateCardPositions);
  }, [functions]);

  return { handleEquationChange };
};

export default useApp;
