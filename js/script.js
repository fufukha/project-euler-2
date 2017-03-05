//Even Fibonacci numbers
//Find all of the sum of the even-value terms in the Fibonacci sequence
//whose values do not exceed a given n

//Save the full sequence into memory
var fibSumOfEven = function(limit) {
	if (isNum(limit)) {
		var seq = fib(limit);
		var seqEven = evenArray(seq);
		var seqEvenSum = sumArray(seqEven);
		return seqEvenSum;
	} else {
		return "Invalid Input";
	}
};


var isNum = function(input) {
	if (typeof input === "number") {
		return true;
	} else {
		return false;
	}
};


var fib = function(limit){
	var sequence = [1,2];
	while (true){
		var lastIndex = sequence.length - 1;
		var lastTerm = sequence[lastIndex] + sequence[lastIndex - 1];
		if (lastTerm < limit) {
			sequence.push(lastTerm);
		}else{
			break;
		}
	}
	return sequence;
};

var isEvenNum = function(num) {
	return  num % 2 === 0;
};


var evenArray = function(array) {
	return array.filter(isEvenNum);
};

var sumArray = function(array) {
	var sum = array.reduce(function(a, b) { return a + b; });
	return sum;
};

fibSumOfEven(5);
//End


//Does not work
/*
var fibSumEven = function(limit) {
	if (isNum(limit)) {
		if (fibUpTo(limit) === false) {
			return sum;
		}
	} else {
		return "Invalid Input!"
	}
};

var isNum = function(input) {
	if (typeof input === "number") {
		return true;
	} else {
		return false;
	}
};



var fibUpTo = function(limit) {
	var seq = [1,2];
	while (true){
		var lastIndex = seq.length - 1;
		var lastTerm = seq[lastIndex] + seq[lastIndex - 1];
		if (lastTerm < limit) {
			addEvens(lastTerm);
			seq.push(lastTerm);
			seq.shift();
		}else{
			break;
		}
	}
};

var isEven = function(number) {
	return number % 2 === 0;
};

var sum = 0;

var addEvens = function(number) {
	if (isEven(number)) {
		return sum += number;
	}
};
*/

