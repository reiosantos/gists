function swap (arr, index1, index2) {
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

function bubble_sort(array) {
	// Non Optimized
	// for (let i = 0; i < array.length; i += 1) {
	// 	for (let j = 0; j < (array.length - i - 1); j += 1) {
	// 		if (array[j] > array[j + 1]) {
	// 			const temp = array[j + 1];
	// 			array[j + 1] = array[j];
	// 			array[j] = temp;
	// 		}
	// 	}
	// }
	// Optimized
	let i = 0;
	let length = array.length - 1;
	while (i < length) {
		if (array[i] > array[i + 1]) {
			swap(array, i, i + 1);
		}
		i++;
		if (length === i) {
			i = 0;
			length--;
		}
	}
	return array
}

console.log('bubble_sort----------');
console.log(bubble_sort([3, 5, 2, 1, 4, 7, 8, 3, 2]));

function merger_sort(array) {
	const tempArray = [];
	if (array.length <= 1) return array;
	
	const mid = Math.floor(array.length/2);
	const left = merger_sort(array.slice(0, mid));
	const right = merger_sort(array.slice(mid));
	
	while (right.length > 0 && left.length > 0) {
		if (left[0] <= right[0]) {
			tempArray.push(left.shift());
		} else {
			tempArray.push(right.shift())
		}
	}
	while (left.length > 0) {
		tempArray.push(left.shift())
	}
	while (right.length > 0) {
		tempArray.push(right.shift())
	}
	return tempArray;
}

console.log('merger_sort----------');
console.log(merger_sort([3, 5, 2, 98, 100, 1, 4, 7, 8, 3, 2]));

function count_occurrence_of_character(str, char) {
	const arr = str.toLowerCase().split('');
	let count = 0;
	for (let i = 0; i < arr.length; i++ ) {
		if (arr[i] === char) {
			count++;
		}
	}
	return count;
}
console.log('count_occurrence_of_character----------');
console.log(count_occurrence_of_character('a book is on the roll', 'o'));


function non_repeating_character(str) {
	const arr = str.toLowerCase().replace(/' '/g, '').split('');
	
	const map = {};
	for (let i = 0; i < arr.length; i++ ) {
		if (map[arr[i]]) {
			map[arr[i]] += 1;
		} else {
			map[arr[i]] = 1;
		}
	}
	for (let i = 0; i < arr.length; i++ ) {
		if (map[arr[i]] === 1) return arr[i]
	}
	return -1;
}
console.log('non_repeating_character----------');
console.log(non_repeating_character('a book is on the roll'));

function array_left_rotation(array, rotations) {
	while (rotations >= 1) {
		array.push(array.shift());
		rotations--;
	}
	return array;
}

console.log('array_left_rotation----------');
console.log(array_left_rotation([2, 3, 4, 5, 6, 7, 8], 2));

function minimum_bribes(q) {
	
	let bribes = 0;
	let chaos = "";
	const map = {};
	q.forEach((p, i) => map[p] = i + 1);
	
	
	for (let P = q.length; P >= 1; P--) {
		const index = map[P];
		const offset = P - index;
		bribes += offset;
		if(offset === 1) {
			const temp = q[index - 1];
			q[index - 1] = q[index];
			map[q[index]] = index;
			q[index] = temp;
		} else if(offset === 2) {
			const temp = q[index - 1];
			q[index - 1] = q[index];
			map[q[index]] = index;
			q[index] = q[index + 1];
			map[q[index + 1]] = index + 1;
			q[index + 1] = temp;
		} else if(offset > 2) {
			chaos = "Too chaotic";
			break;
		}
	}
	if (chaos === "Too chaotic") {
		return chaos;
	} else {
		return bribes;
	}
}

console.log('minimum_bribes----------');
console.log(minimum_bribes([1, 6, 4, 3, 2, 7, 5]));


function merger_sort_nested_array(array, sortIndex) {
	const tempArray = [];
	if (array.length <= 1) return array;
	
	const mid = Math.floor(array.length/2);
	const left = merger_sort_nested_array(array.slice(0, mid), sortIndex);
	const right = merger_sort_nested_array(array.slice(mid), sortIndex);
	
	while (right.length > 0 && left.length > 0) {
		if (left[0][sortIndex] <= right[0][sortIndex]) {
			tempArray.push(left.shift());
		} else {
			tempArray.push(right.shift())
		}
	}
	while (left.length > 0) {
		tempArray.push(left.shift())
	}
	while (right.length > 0) {
		tempArray.push(right.shift())
	}
	return tempArray;
}

function minimum_swaps(array) {
	let minSwaps = 0;
	// let length = array.length - 1;
	let visited = Array(array.length).fill(false);
	
	let position_array = array.map((value, index) => [index, value]);
	position_array = merger_sort_nested_array(position_array, 1);
	
	for(let i = 0; i < position_array.length; i++) {
		// already swapped already present at correct position
		if (visited[position_array[i][0]] ||  position_array[i][0] === i){
			continue;
		}
		// find number of nodes in this cycle and add it to minSwaps
		let cycleSize = 0;
		let j = position_array[i][0];
		while (!visited[j]) {
			// mark node as visited
			visited[j] = true;
			// move to next node
			j = position_array[j][0];
			cycleSize++;
		}
		// update minSwaps by adding current cycle
		minSwaps += (cycleSize - 1)
	}
	return minSwaps;
}

console.log('minimum_swaps----------');
console.log(minimum_swaps([2, 3, 4, 1, 5, 8, 2, 45])); // 5
console.log(minimum_swaps([7, 1, 3, 2, 4, 5, 6])); // 5
console.log(minimum_swaps([1, 3, 5, 2, 4, 6, 7])); // 3
console.log(minimum_swaps([4, 3, 1, 2])); // 3
console.log(minimum_swaps(Array.from({ length: 100000 }, () => Math.floor(Math.random() * 39 * 1000))));
