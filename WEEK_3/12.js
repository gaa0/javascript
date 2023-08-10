var numbers = [10, 20, 3, 16, 45];
var max = min = numbers[0]; // 10

numbers.forEach(function (number, idx) {
	console.log(idx + "번째 값 => " + number);
});

// console.log(max, min);
