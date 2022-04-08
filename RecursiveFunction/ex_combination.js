// 두개의 수를 뽑는 조합
// https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

function combinations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combis = combinations(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });
  return result;
}

function solution(numbers) {
  // 1. 조합을 구한다. n 개중 2개
  // 2. 조합의 합을 구한다.
  // 3. 중복을 제거한다.
  // 4. 오름차순 정렬한다.
  return [
    ...new Set(combinations(numbers, 2).map((combi) => combi[0] + combi[1])),
  ].sort((a, b) => a - b);
}
