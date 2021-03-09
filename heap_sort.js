function heapify(arr, length, i)
{
	let largest = i
	let left = i * 2 + 1
	let right = left + 1

	if(left < length && arr[left] > arr[largest])
	{
		largest = left
	}

	if(right < length && arr[right] > arr[largest])
	{
		largest = right
	}

	if(largest != i)
	{
		[arr[i], arr[largest]] = [arr[largest], arr[i]]

		heapify(arr, length, largest)
	}

	return arr
}

function heapSort(arr)
{
	let length = arr.length
	let i = Math.floor(length / 2 - 1)
	let k = length - 1

	while(i >= 0)
	{
		heapify(arr, length, i)
		i--
	}

	while(k >= 0)
	{
		[arr[0], arr[k]] = [arr[k], arr[0]]
		heapify(arr, k, 0)
		k--
	}

	return arr
}

function Calculate()
{
	var arrString = document.getElementById("ArrayInputField").value.split(' ')
	var arr = arrString.map((i) => Number(i))
	arrSorted = heapSort(arr)
	var ans = "Your sorted array is:"
	len = arrSorted.length
	const iterator = arrSorted.values();
	for (const value of iterator)
	{
  		console.log(value);
	}
	for(var i = 0; i < len; i++)
	{
		ans += " "
		ans += String(arrSorted[i])
	}
	document.getElementById("Answer").innerHTML = ans;

}