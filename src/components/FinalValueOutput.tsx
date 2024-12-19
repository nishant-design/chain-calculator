import useStore from "../store/store";
import { StoreType } from "../types/chainCalculator";

const FianlValueOutput = () => {
  const {finalOutput} = useStore((state: StoreType) => state)
  return (
    <div className="absolute top-[184px] -right-32 w-[115px]" id="func-output">
      <p className="text-center text-white font-medium text-xs bg-CustomGreen rounded-2xl p-1">
        Final Output y
      </p>
      <div className="border-2 border-CustomGreen rounded-2xl mt-1 flex bg-white flex-row-reverse">
        <input disabled className="w-3/5 rounded-e-2xl focus:outline-none p-2 px-2 text-lg text-right" value={finalOutput} />
        <p className="bg-[#C5F2DA] w-[1px]"></p>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-4 h-4 border-[#dbdbdb] border-2 rounded-full flex justify-center items-center">
            <span className="w-2 h-2 bg-[#66A3FF] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FianlValueOutput;
