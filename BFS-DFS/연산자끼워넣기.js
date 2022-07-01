// https://www.acmicpc.net/problem/14888

const arrangeOperator = (input) => {
  const n = parseInt(input.shift());
  const numbers = input.shift().split(' ').map(Number);
  const operaterCounts = input.shift().split(' ').map(Number);
  const visited = new Array(operaterCounts.length).fill(false);
  
  let operatorFs = [];
  const selectedFs = [];

  let least = Infinity;
  let largest = -Infinity;


  const operators = [
    function (a, b) { return a + b },
    function (a, b) { return a - b },
    function (a, b) { return a * b },
    function (a, b) { return parseInt(a / b) }
  ]
  
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < operaterCounts[i]; j++) {
      if (operaterCounts[i]) operatorFs.push(operators[i])
    }
  }


  const calc = (operater, val1, val2) => {
    return operater(val1, val2);
  }

  const dfs = (count) => {
    if (count === n - 1) { 
      let sum = 0;
      let temp = 0;
    
      for (let i = 0; i < selectedFs.length; i++) {
        if (i === 0) {
          temp = calc(selectedFs[i], numbers[i], numbers[i+1]);
        } else {
          temp = calc(selectedFs[i], temp, numbers[i+1]);
        }
        
        if (i === selectedFs.length -1) {
          sum = temp
          least = Math.min(least, sum);
          largest = Math.max(largest, sum);
        };
      }
    }
    for (let i = 0; i < operatorFs.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      selectedFs.push(operatorFs[i]);
      dfs(count + 1);
      visited[i] = false;
      selectedFs.pop();
    }
  }
  dfs(0);
  return [least, largest];
}

arrangeOperator(['2', '5 6', '0 0 1 0']);
arrangeOperator(['3', '3 4 5', '1 0 1 0']);
arrangeOperator(['6', '1 2 3 4 5 6', '2 1 1 1']);