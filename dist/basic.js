function reverseString(str) {
	//splitting , reversing and joining the strung
	var a = str.split('').reverse().join('');
	return a;
}

reverseString("hello"); //returns "olleh"







function factorialize(num) {
	if (a === 0) {
		return 1;
	} else {
		return a * factorialize(a - 1)
	}
}

factorialize(5); //returns 120






function palindrome(str) {
	var reversed = str.split('').reverse().join('');
	if (reversed = str) {
		return true;
	} else {
		return false;
	}
	return true;
}



palindrome("eye"); // returns true






function findLongestWord(str) {
	return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");




function titleCase(str) {
	return str;
}

titleCase("I'm a little tea pot");




function largestOfFour(arr) {

	return arr;
}

largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1]
]);

function confirmEnding(str, target) {


	return str;
}


function repeatStringNumTimes(str, num) {

	return str;
}

repeatStringNumTimes("abc", 3);

function truncateString(str, num) {

	return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);


function chunkArrayInGroups(arr, size) {

	return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

function slasher(arr, howMany) {

	return arr;
}

slasher([1, 2, 3], 2);


function mutation(arr) {
	return arr;
}

mutation(["hello", "hey"]);


function bouncer(arr) {

	return arr;
}

bouncer([7, "ate", "", false, 9]);



function destroyer(arr) {

	return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


function getIndexToIns(arr, num) {

	return num;
}

getIndexToIns([40, 60], 50);

function rot13(str) {

	return str;
}


rot13("SERR PBQR PNZC");
