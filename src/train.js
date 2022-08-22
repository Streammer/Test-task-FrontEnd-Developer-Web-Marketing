function rowSumOddNumbers(n) {
	const line = [];
	const diagonal = [1];
	if(n===0||n===1) return n
	for(let i = 1; i<n; i++) {
		diagonal.push(diagonal[i-1] + (2*i)) 
	}
	for (let i = 1; i < n; i++) {
		if(i===1) {
			line.push(diagonal[diagonal.length-1])
		}
		line.push(line[i-1] + 2)
	}
	let result = line.reduce((sum, current) => sum + current, 0);
	return result
}

const obj = {
	id: 11,
	content: 'asa'
}
// console.log(obj)
Object.defineProperty(obj, 'id', {
	writable: false
})

obj.id = 12
obj.content = "retrttr"

// console.log(obj)




console.log(1)
console.log(2)

let p = new Promise((res, rej) => {
	console.log(3)
	res("Hello")
	console.log(4)
})
console.log(p)

console.log(5)

p.then(data => {
	console.log(6)
	return data + 1
})
.then(data => {
	console.log('data ' + data)
})
.then(()=> {
	console.log(7)
})
.then(console.log(p))

console.log(8)
