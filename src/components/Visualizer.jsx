
import React from 'react';
import { motion } from 'framer-motion';

const Visualizer = ({ steps, stepIndex }) => {

  if (!Array.isArray(steps) || steps.length === 0) {
    return <div>No steps to visualize</div>;
  }

  const currentStep = steps[stepIndex] || {
    array: [],
    comparing: [],
    swapped: false,
  };

  const { array, comparing, swapped } = currentStep;

  return (
    <div className="visualizer">
      {array.map((value, index) => (
        <motion.div
          key={index}
          className="bar"
          style={{
            height: `${value}px`,
            margin:'1px',
            backgroundColor: comparing.includes(index)
              ? swapped
                ? '#f39c12'
                : '#3498db'
              : '#2ecc71',
          }}
          animate={{ x: 0 }}
          initial={{ x: -50 }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
};

export default Visualizer;
