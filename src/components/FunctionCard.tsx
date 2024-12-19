import React from "react";
import DotsComponent from "./DotsComponent";
import InitialValueInput from "./InitialValueInput";
import FianlValueOutput from "./FinalValueOutput";
import useStore from "../store/store";
import { StoreType } from "../types/chainCalculator";

interface FunctionCardProps {
  id: number;
  equation: string;
  nextFunction: number | null;
  onEquationChange: (id: number, equation: string) => void;
  initial?: boolean;
  final?: boolean;
}

const FunctionCard: React.FC<FunctionCardProps> = ({
  id,
  equation,
  nextFunction,
  onEquationChange,
  initial = false,
  final = false,
}) => {
  const {setInitialValue, initialValue} = useStore((state: StoreType) => state);

  //this is to check that the input only has numbers and operators given (+,-,*,/,^)
  const handleEquationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEquation = e.target.value;
    if (/^[x0-9+\-*/^().\s]*$/.test(newEquation)) {
      onEquationChange(id, newEquation);
      if(initialValue !== 0) {
        setInitialValue(0);
      }
    }
  };

  return (
    <div
      className={`bg-white p-[18px] rounded-2xl border-[1px] border-FuntionCardBorder shadow-[0_0_6px_0_#0000000D]  max-w-60`}>
      <div className="flex items-center gap-x-2">
        <DotsComponent />
        <h3 className={`text-sm font-semibold text-FuncCardHeadingColor`}>
          Function: {id}
        </h3>
      </div>

      <div className="my-3">
        <label className="text-xs font-medium text-CustomBlack">Equation</label>
        <input
          type="text"
          value={equation}
          onChange={handleEquationChange}
          className="text-xs p-2 rounded-lg mt-1 w-full border-EquationFieldBorder border-[1px] focus:border-FuncCardHeadingColor focus:outline-none"
        />
      </div>

      <div>
        <label className="text-xs font-medium text-CustomBlack">
          Next function
        </label>
        <select
          disabled
          className="mt-1 w-full rounded-lg border-EquationFieldBorder border-[1px] bg-[#f5f5f5] p-2 text-xs text-CustomBlack">
          <option>{nextFunction ? `Function: ${nextFunction}` : "-"}</option>
        </select>
      </div>

      <div className="flex justify-between mt-10">
        <div className="flex items-end gap-x-1">
          <div className="w-4 h-4 border-[#dbdbdb] border-2 rounded-full flex justify-center items-center">
            <span className="w-2 h-2 bg-[#66A3FF] rounded-full" />
          </div>
          <p className="text-[10px] text-[#585757]">Input</p>
        </div>
        <div className="flex items-end gap-x-1">
          <p className="text-[10px] text-[#585757]">Output</p>
          <div className="w-4 h-4 border-[#dbdbdb] border-2 rounded-full flex justify-center items-center">
            <span className="w-2 h-2 bg-[#66A3FF] rounded-full" />
          </div>
        </div>
      </div>

      {/* rendering X-input and Y-output components only for 1st card and last card resp*/}
      {initial && <InitialValueInput />}
      {final && <FianlValueOutput />}
    </div>
  );
};

export default FunctionCard;
