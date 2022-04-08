const stack = [];

//Push
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack); // [1, 2, 3]

//Pop
stack.pop();
console.log(stack); // [1, 2]

// Get Top
console.log(stack[stack.length - 1]); // 2
