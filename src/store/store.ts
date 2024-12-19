import { create } from "zustand";
import { initialFunctions } from "../constant/constant";
import { StoreType } from "../types/chainCalculator";

const useStore = create<StoreType>((set) => {
    return {
        initialValue: 0,
        setInitialValue: (value) => set({initialValue: value}),
        finalOutput: undefined,
        setFinalOutput: (value) => set({finalOutput: value}),
        functions: initialFunctions,
        setFunctions: (updatedFunc) => set({functions: updatedFunc}),
        cardPositions: {},
        setCardPositions: (newPositions) => set({cardPositions: newPositions}) 
    }
});

export default useStore;