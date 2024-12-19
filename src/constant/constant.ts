import { FunctionDataType } from "../types/chainCalculator";

export const FUNCTION_CONNECTIONS = [
    [0, 1],
    [1, 2],
    [2, 4],
    [4, 5],
    [5, 3],
    [3, 6],
]

export const initialFunctions: FunctionDataType[] = [
    { id: 1, equation: 'x*2', nextFunction: 2, initial: true },
    { id: 2, equation: 'x+2', nextFunction: 4, final: true },
    { id: 3, equation: 'x-2', nextFunction: null },
    { id: 4, equation: 'x/2', nextFunction: 5 },
    { id: 5, equation: 'x^2', nextFunction: 3 },
];