getShortestDistance(['5 2', '0 2 0 1 0', '1 0 1 0 0', '0 0 0 0 0', '2 0 0 1 1', '2 2 0 1 2']);

function getShortestDistance(input) {
  const [n, m] = input.shift().split(' ').map(Number);
  const city = input.map((line) => line.split(' ').map(Number));
  console.log('city', city);

  const house = [];
  const chicken = [];


  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // city에서 house, chicken 위치 뽑기 
      if (city[i][j] === 1) house.push([i, j]);
      else if (city[i][j] === 2) chicken.push([i, j]);
    }
  }

  console.log('house', house);
  console.log('chicken', chicken);

  const getMinDistance = () => {
    let sum = 0;
    // 집 기준으로, 가장 가장 가까운 치킨집 구하기
    house.forEach(([hx, hy]) => {
      let min = Infinity;
      chicken.forEach(([cx, cy], index) => {
        // 구현으로 뽑혀진 치킨집만 대상으로 함
        if (check[index] === true) {
          min = Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy));
        }
      });
      sum += min;
    });
    return sum;
  };

  const check = new Array(chicken.length).fill(false);
  let answer = Infinity;

  const DFS = (idx, cnt) => {
    // 카운트가 m만큼 되면 getMinDistance 실행
    if (cnt === m) {
      answer = Math.min(answer, getMinDistance());
      return;
    }
    // dfs로 구현으로 m개 뽑아내기
    for (let i = idx; i < chicken.length; i++) {
      if (check[i] === true) continue;
      check[i] = true;
      DFS(i, cnt + 1);
      check[i] = false;

    }
  };

  DFS(0, 0);
  console.log(answer);
}
// getShortestDistance(['5 3', '0 0 1 0 0', '0 0 2 0 1', '0 1 2 0 0', '0 0 1 0 0', '0 0 0 0 2']);
