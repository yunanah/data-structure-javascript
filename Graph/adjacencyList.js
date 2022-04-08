// 인접 리스트
const graph = Array.from(Array(5), () => []);
graph[0].push(1); // 0 -> 1
graph[0].push(3); // 0 -> 3
graph[1].push(2); // 1 -> 2
graph[2].push(0); // 2 -> 0
graph[2].push(4); // 2 -> 4
graph[3].push(2); // 3 -> 2
graph[4].push(0); // 4 -> 0
