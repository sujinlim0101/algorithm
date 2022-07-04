result(['2 20 50', '50 30', '20 40']);
result(['2 20 50', '50 30', '30 40']);
result(['4 10 50', '10 100 20 90', '80 100 60 70', '70 20 30 40', '50 20 100 10']);

function result(input) {
  const [n, l, r] = input.shift().split(' ').map(Number);
  const countries = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

  for (let i = 0; i < n; i++) {
    countries[i] = input.shift().split(' ').map(Number);
  }

  let answer = 0;
  
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  while (true) {
    let flag = false;
    const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
    
        if (!visited[i][j]) {
          // 초기화
          let queue = [[i, j]];
          let visitedRecord = [[i, j]]; // 방문노드 누적
          let cnt = 1;
          let sumPopulation = countries[i][j];
          visited[i][j] = true;

          while (queue.length) {
            // queue에 있는 원소 꺼내줌
            const [x, y] = queue.shift();
             // 인접한 노드 모두 돌기
            for (let k = 0; k < 4; k++) {
              const [nx, ny] = [x + dx[k], y + dy[k]];

              if (nx >= 0 && nx < n && ny >= 0 && ny < n) { // 배열을 벗어나지 않도록

                const diff = Math.abs(countries[x][y] - countries[nx][ny]); // 차이값
                if (diff >= l && diff <= r && !visited[nx][ny]) { // 차이값이 조건에 부합하는지 && 방문한적이 없는지
                  visited[nx][ny] = true;
                  // queue에 조건에 부합하는 것 넣기
                  queue.push([nx, ny]);
                  visitedRecord.push([nx, ny]);
                  cnt++;
                  sumPopulation += countries[nx][ny];
                  flag = true;
                }
              }
            }
          }
          // queue가 비었음.
          const changePopulation = Math.floor(sumPopulation / cnt);

          for (const [x, y] of visitedRecord) {
            countries[x][y] = changePopulation;
          }
        }
      }
    }
    // countries를 한바퀴 끝까지 돌았는데 flag 값이 false라면, 인구 이동이 더이상 발생하지 않았다는 뜻이므로 break해줌.
    if (!flag) {
      break;
    }
    // countries를 한차례돌며 확인하였고, 각 연합들의 인구이동은 동시에 일어나므로 answer을 1 더해준다.
    answer += 1;
  }
}



// https://www.acmicpc.net/problem/16234
// 참고: https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-16234-%EC%9D%B8%EA%B5%AC%EC%9D%B4%EB%8F%99-javascript