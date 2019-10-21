function multiplicationSign(A) {
	if (!A || typeof A === 'string') return 0;
	if (!Array.isArray(A)) A = [A];
	let arr = A.reduce((a, b) => {
		if (Number.isNaN(a)) a = 1;
		if (Number.isNaN(b)) b = 1;
		return a * b;
	});
	if (arr > 0) return 1;
	if (arr < 0) return -1;
	return 0;
}

function minValueInArray(A, B) {
	function cmp(a, b) {
		return a - b;
	}
	const n = A.length;
	let m = B.length;
	A.sort(cmp);
	B.sort(cmp);
	let i = 0;
	for (let k = 0; k < n; k++) {
		while (i < m - 1 && B[i] < A[k]) //remove the if, and put a while
			i += 1;
		if (A[k] === B[i])
			return A[k];
	}
	return -1;
}

function reformatPhoneNumber(S) {
	if (!S) return '';
	if (typeof S !== 'string') S = S.toString();
	S = S.replace(/ /g, '').replace(/-/g, '');
	S = S.split('');
	
	const chunk = 3;
	let last = [];
	let groups = [];
	let limit = 0;
	
	if (S.length % chunk === 1) {
		last = [S.slice(-4, -2).join(''), S.slice(-2).join('')];
		limit = 4;
	}
	
	if (S.length % chunk === 2) {
		last = [S.slice(-2).join('')];
		limit = 2;
	}
	
	for (let i = 0; i < S.length - limit; i += chunk) {
		
		let s = S.slice(i, i + chunk);
		groups.push(s.join(''));
		
	}
	groups = groups.concat(last);
	return groups.join('-');
}


/**
 * Remove duplicates from array
 * @param array
 * @return {[]}
 */
function removeDuplicates(array) {
	return Array.from(new Set(array));
}

/**
 * Replace specific Items in an array
 * @param array
 * @param start
 * @param count
 * @param items
 * @return {*}
 */
function replaceSpecificValueInArray(array, start, count, items) {
	array.splice(start, count, ...items);
	return array;
}

/**
 * Empty an array
 * @param array
 * @return {*}
 */
function emptyArray(array) {
	array.length = 0;
	return array;
}

/**
 * Convert an array to object
 * @param array
 */
function array2Object(array) {
	return { ...array };
}

/**
 * Fill an array of variable length with data or 1
 * @param length
 * @param data
 * @return {[]}
 */
function fillArrayWithData(length, data) {
	return new Array(length || 10).fill(data || 1);
}

/**
 * Find intersection of two arrays
 * @param array1
 * @param array2
 * @return {[]}
 */
function intersectionOfTwoArrays(array1, array2) {
	return [...new Set(array1)].filter(item => array2.includes(item));
}

/**
 * Remove all falsy values(NaN, "", 0, undefined, false) from array
 * @param array
 * @return {Int32Array | Uint32Array | [] | Int8Array | Float64Array | BigUint64Array | Uint8Array | Int16Array | BigInt64Array | Float32Array | Uint8ClampedArray | Uint16Array}
 */
function removeFalsyValues(array) {
	return array.filter(Boolean);
}

/**
 * Return a random value from an array
 * @param array
 * @return {*}
 */
function randomValueFromArray(array) {
	return array[Math.floor(Math.random() * array.length)]
}

/**
 * reverse an array
 * @param array
 * @return {this | void | Promise<string[]> | Uint8Array | this | Uint16Array | Int16Array | Float32Array | Uint8ClampedArray | Int32Array | Int8Array | Float64Array | this | [] | Uint32Array}
 */
function reverseArray(array) {
	return array.reverse();
}

/**
 * return the sum of all values in array
 * @param array
 * @return {*}
 */
function sumAllArrayValues(array) {
	return array.reduce((x, y) => x + y);
}
