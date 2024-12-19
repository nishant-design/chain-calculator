import React from 'react';
import ConnectionLines from './components/ConnectionLines';
import FunctionCard from './components/FunctionCard';
import useApp from './hooks/useApp';
import useStore from './store/store';
import { StoreType } from './types/chainCalculator';

const App: React.FC = () => {
  const {functions} = useStore((state: StoreType) => state);
  const {handleEquationChange} = useApp();

  return (
    <div className={`bg-[url('./src/assets/images/background.png')] bg-AppBgColor min-h-svh flex items-center justify-center relative`}>
      {/* these are the connecting lines */}
      <ConnectionLines />

      {/* this is the container which contains all the function cards as well as X-Input and Y-Output Fields */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center max-w-5xl gap-32 items-end relative">
        {functions.map((func) => (
          <div key={func.id} id={`function-card-${func.id}`}>
            <FunctionCard
              key={func.id}
              id={func.id}
              equation={func.equation}
              nextFunction={func.nextFunction}
              initial={func.initial}
              final={func.final}
              onEquationChange={handleEquationChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
