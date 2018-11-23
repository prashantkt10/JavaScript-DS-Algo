function validAnagram(word1, word2){
	let arr1 = word1.split('');
	let arr2 = word2.split('');
	
	let fcounter1 = {};
	let fcounter2 = {};
	
	for(let val of arr1){
		fcounter1[val] = (fcounter1[val] || 0) + 1;
	}
	for(let val of arr2){
		fcounter2[val] = (fcounter2[val] || 0) + 1;
	}

	console.log(fcounter1);
	console.log(fcounter2);

	for(let key in fcounter1){
		if(!(key in fcounter2 && fcounter1[key]==fcounter2[key]))
			return false;
	}
	return true;
}
