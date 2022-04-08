// 0번 인덱스는 편의를 위해 비워둔다
// Left = Index * 2
// Right = Index * 2 + 1
// Parent = floor(Index / 2)
const tree = [
  undefined,
  //1
  9,
  // 1*2, 1*2+1
  3,
  8,
  // 2*2, 2*2+1, 3*2, 3*2+1
  2,
  5,
  undefined,
  7,
  // 4*2, 4*2+1, 5*2, 5*2+1
  undefined,
  undefined,
  undefined,
  4,
];
