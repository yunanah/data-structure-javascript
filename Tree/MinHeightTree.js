// 크루스칼 알고리즘 Kruscal Algorithm
// 최상위 원소 찾기
function find(parent, x) {
  if (parent[x] === x) {
    // 부모와 원소가 같다면 최상위 원소
    return x;
  }

  // 경로 압축 최적화
  return (parent[x] = find(parent, parent[x]));
}

// 두 원소 합치기
function union(parent, a, b) {
  a = find(parent, a); // a의 최상위 원소
  b = find(parent, b); // b의 최상위 원소
  if (a < b) {
    // 더 낮은 원소가 부모 원소가 되도록 규칙을 잡는다
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

// 두 원소가 같은 집합인지 검사
function compare(parent, a, b) {
  a = find(parent, a); // a의 최상위 원소
  b = find(parent, b); // b의 최상위 원소
  return a === b; // 같다면 같은 집합
}

function solution(n, costs) {
  let answer = 0;
  const sortedCosts = costs.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, i) => i);

  for (const [a, b, cost] of sortedCosts) {
    // 각 정점과 간선의 가중치
    if (!compare(parent, a, b)) {
      // 두 원소가 같은 집합인지 체크. 같다면 cycle
      answer += cost; // 아니라면 answer에 가중치를 더한다
      union(parent, a, b); // 그리고나서 두 정점을 하나의 집합으로 만든다
    }
  }

  return answer; // 결과 반환
}
