// 에라토스테네스의 체
// O(n log log n)
function get_primes(num) {
  const prime = [false, false, ...Array(num - 1).fill(true)]; // 0과 1은 소수가 아니기에 미리 false로 체크합니다.

  for (let i = 2; i * i <= num; i += 1) {
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.filter(Boolean); // true만 필터링하고 싶을 경우 이런 방식으로 쓸 수 있습니다.
}

function solution(n) {
  return get_primes(n).length;
}
