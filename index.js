/// CHALLENGE 1 CAPITALIZE THE FIRST LETTER
/// solution 1
// function capitaize(str) {
// 	let newArr = str.toLowerCase().split(" ");
// 	for (let i = 0; i < newArr.length; i++) {
// 		newArr[i] =
// 			newArr[i].substring(0, 1).toUpperCase() + newArr[i].substring(1);
// 	}
// 	return newArr.join(" ");
// }

// console.log(capitaize("caeser al ani"));
///////////
// solution 2
// function capitaize(str) {
// 	let newArr = str
// 		.toLowerCase()
// 		.split(" ")
// 		.map((word) => word[0].toUpperCase().concat(word.substr(1)));
// 	return newArr.join(" ");
// }
// console.log(capitaize("caeser al ani"));
//// solution 3
// function capitaize(str) {
// 	return str.replace(/\b[a-z]/gi, function (char) {
// 		return char.toUpperCase();
// 	});
// }

// console.log(capitaize("caeser al ani"));
////////////////////////////
/// CHALLENGE 2
// MAX CHARECTER IN A STRING
// solution
// function maxChar(str) {
// 	const charMap = {};
// 	let maxNum = 0;
// 	let maxCharr = "";

// 	str.split("").forEach(function (char) {
// 		if (charMap[char]) {
// 			charMap[char]++;
// 		} else {
// 			charMap[char] = 1;
// 		}
// 	});
// 	for (let char in charMap) {
// 		if (charMap[char] > maxNum) {
// 			maxNum = charMap[char];
// 			maxCharr = char;
// 		}
// 	}
// 	return maxCharr;
// }

// console.log(maxChar("javascripttt"));

///////////////////////////
/// Challenge 3
/// find the math sequence..   (no negetive numbers)
/// artimatic, geometric, or no pattern

// function mathSequences(arr) {
// 	let arith = new Set();
// 	let geo = new Set();

// 	for (let i = 1; i < arr.length; i++) {
// 		let number1 = arr[i] - arr[i - 1];
// 		arith.add(number1);
// 		let number2 = arr[i] / arr[i - 1];
// 		geo.add(number2);
// 	}
// 	if (arith.size === 1) {
// 		return "Arithmatic";
// 	}
// 	if (geo.size === 1) {
// 		return "Geometric";
// 	}
// 	return -1;
// }

// console.log(mathSequences([2, 4, 6, 8]));
// /// 'Arithmatic'
// console.log(mathSequences([3, 9, 27]));
// /// 'Geometric'
// console.log(mathSequences([2, 7, 16, 98]));
// /// -1

////////////////////////////////////////////

/// CHALLENGE 4
//// LONGEST WORDS IN THE STRING
/// if there are more than one word return them in an array.

// function longestWords(str) {
// 	let words = str.split(" ");
// 	let size = 0;
// 	let max = [""];

// 	for (let i = 0; i < words.length; i++) {
// 		if (words[i].length >= size) {
// 			size = words[i].length;
// 			if (max[max.length - 1].length < words[i].length) {
// 				max = [];
// 				max.push(words[i]);
// 			} else {
// 				max = [...max, words[i]];
// 			}
// 		}
// 	}

// 	return [...max];
// }
// console.log(longestWords("I woke up early today"));
// console.log(longestWords("I love javascript"));

/////////////////////////////
///  CHALLENGE 5
/// capitalize the first letter
// /// solution 1
// function cpitalizeWords(str) {
// 	let words = str.split(" ").map((word) => {
// 		let first = word.slice(0, 1).toUpperCase();
// 		let rest = word.slice(1);
// 		return `${first}${rest}`;
// 	});
// 	return words.join(" ");
// }
// console.log(cpitalizeWords("i love javaScript"));
// console.log(cpitalizeWords("my name is caeser"));

////////////////

// /// solution 2
// function cpitalizeWords(str) {
// 	let words = str.split(" ").map((word) => {
// 		return word.charAt(0).toUpperCase() + word.slice(1);
// 	});
// 	return words.join(" ");
// }
// console.log(cpitalizeWords("i love javaScript"));
// console.log(cpitalizeWords("my name is caeser"));

/////////////////////////////

///CHALLENGE 6
//return true onlyif all values are unique otherwise return false
/// using array , object, string method  lastIndexOf()
/// no set Data structure

//solution 1 using an array
// function uniqe(str) {
// 	let values = [];
// 	for (let letter of str) {
// 		if (values.indexOf(letter) !== -1) {
// 			return false;
// 		}
// 		values.push(letter);
// 	}
// 	return true;
// }

// console.log(uniqe("abcde"));
// //true
// console.log(uniqe("abacdefb"));
// //false

/////////////

///solution 2 using an object

function uniqe(str) {
	let values = {};
	for (let letter of str) {
		if (values[letter]) {
			return false;
		}
		values[letter] = "exists";
	}
	return true;
}

console.log(uniqe("abcde"));
//true
console.log(uniqe("abacdefb"));
//false
