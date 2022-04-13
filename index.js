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
function capitaize(str) {
	let newArr = str
		.toLowerCase()
		.split(" ")
		.map((word) => word[0].toUpperCase().concat(word.substr(1)));
	return newArr.join(" ");
}
console.log(capitaize("caeser al ani"));
