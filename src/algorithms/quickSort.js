export function quickSort(array, setSteps) {
    const steps = [];
    const arr = [...array];
  
    function partition(low, high) {
      const pivot = arr[high];
      let i = low - 1;
  
      for (let j = low; j < high; j++) {
        steps.push({
          array: [...arr],
          comparing: [j, high],
          swapped: false,
        });
  
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]]; 
          steps.push({
            array: [...arr],
            comparing: [i, j],
            swapped: true,
          });
        }
      }
  
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      steps.push({
        array: [...arr],
        comparing: [i + 1, high],
        swapped: true,
      });
  
      return i + 1;
    }
  
    function quickSortRecursive(low, high) {
      if (low < high) {
        const pivotIndex = partition(low, high);
        quickSortRecursive(low, pivotIndex - 1);
        quickSortRecursive(pivotIndex + 1, high);
      }
    }
  
    quickSortRecursive(0, arr.length - 1);
  
  
    steps.push({
      array: [...arr],
      comparing: [],
      swapped: false,
    });
  
    setSteps(steps);
  }
  