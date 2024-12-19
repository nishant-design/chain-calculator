export interface FunctionDataType {
    id: number;
    equation: string;
    nextFunction: number | null;
    initial?: boolean;
    final?: boolean;
};

export interface CardPositionType {[key: number]: DOMRect};

export interface Point {
    x: number;
    y: number;
  }

export interface StoreType {
    initialValue: number;
    setInitialValue: (value: number) => void;
    finalOutput: number | undefined;
    setFinalOutput: (value: number | undefined) => void;
    functions: FunctionDataType[];
    setFunctions: (updatedFunc: FunctionDataType[]) => void;
    cardPositions: CardPositionType;
    setCardPositions: (newPositions: CardPositionType) => void;
}