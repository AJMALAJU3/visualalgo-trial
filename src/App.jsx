import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';
import { bubbleSort } from './algorithms/bubbleSort';
import { quickSort } from './algorithms/quickSort';

const App = () => {
  const [algorithm, setAlgorithm] = useState(null);
  const [data, setData] = useState([50, 150, 100, 200, 75, 25]); 
  const [steps, setSteps] = useState([]);
  const [stepIndex, setStepIndex] = useState(0); 
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    if (isPlaying && stepIndex < steps.length - 1) {
      const timer = setTimeout(() => setStepIndex(stepIndex + 1), 500);
      return () => clearTimeout(timer);
    } else if (stepIndex >= steps.length - 1) {
      setIsPlaying(false); 
    }
  }, [isPlaying, stepIndex, steps]);


  const handleRun = () => {
    if (algorithm === 'bubbleSort') {
      bubbleSort(data, setSteps);
    } else if (algorithm === 'quickSort') {
      quickSort(data, setSteps); 
    }
    setStepIndex(0); 
    setIsPlaying(false); 
  };

  return (
    <div>
      <Navbar setAlgorithm={setAlgorithm} /> 
      <div style={{ margin: '20px' }}>
        <button onClick={handleRun} disabled={!algorithm}>
          Run {algorithm || 'Algorithm'}
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          disabled={!steps.length}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={() => setStepIndex(0)} disabled={!steps.length}>
          Reset
        </button>
      </div>
      <Visualizer steps={steps} stepIndex={stepIndex} /> 
    </div>
  );
};

export default App;
