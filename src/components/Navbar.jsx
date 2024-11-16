
import React from 'react';

const Navbar = ({ setAlgorithm }) => {
  return (
    <nav>
      <button onClick={() => setAlgorithm('bubbleSort')}>Bubble Sort</button>
      <button onClick={() => setAlgorithm('quickSort')}>Quick Sort</button>
      <button onClick={() => setAlgorithm('pathfinding')}>Pathfinding</button>
    </nav>
  );
};

export default Navbar;
