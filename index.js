/// CHALLENGE 1 CAPITALIZE THE FIRST LETTER

function capitaize(str) {
	let newArr = str.toLowerCase().split(" ");
	for (let i = 0; i < newArr.length; i++) {
		newArr[i] =
			newArr[i].substring(0, 1).toUpperCase() + newArr[i].substring(1);
	}
	return newArr.join(" ");
}

console.log(capitaize("caeser al ani"));
