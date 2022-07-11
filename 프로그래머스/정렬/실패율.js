function solution(N, stages) {
  let failInfos = [];
  let userLength = stages.length;
  
  for(let i = 1; i <= N; i++) {
      const stageFailNum = stages.filter(stage => i === stage).length;
      const stageFailRatio = stageFailNum / userLength;
      // i에 도달하지 못했다는건, 다음 스테이지에도 도달하지 못했다는것을 의미
      userLength -= stageFailNum;
      failInfos.push({ stage: i, ratio: stageFailRatio });
  }

  return failInfos.sort((a, b) => {
      if (a.ratio === b.ratio) return a.stage - b.stage;
      return b.ratio - a.ratio
  }).map(fail => fail.stage);
  
}