export const bubbleSort = (array, setSteps) => {
    const steps = [];
    const arr = [...array]; 
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        steps.push({
          array: [...arr],
          comparing: [j, j + 1],
          swapped: false,
        });
  
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          steps.push({
            array: [...arr],
            comparing: [j, j + 1],
            swapped: true,
          });
        }
      }
    }
  
    steps.push({
      array: [...arr],
      comparing: [],
      swapped: false,
    });
  
    setSteps(steps); 
  };
  