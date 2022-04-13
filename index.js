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
function maxChar(str) {
	const charMap = {};
	let maxNum = 0;
	let maxCharr = "";

	str.split("").forEach(function (char) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	});
	for (let char in charMap) {
		if (charMap[char] > maxNum) {
			maxNum = charMap[char];
			maxCharr = char;
		}
	}
	return maxCharr;
}

console.log(maxChar("javascripttt"));
