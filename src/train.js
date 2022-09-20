// function rowSumOddNumbers(n) {
// 	const line = [];
// 	const diagonal = [1];
// 	if(n===0||n===1) return n
// 	for(let i = 1; i<n; i++) {
// 		diagonal.push(diagonal[i-1] + (2*i)) 
// 	}
// 	for (let i = 1; i < n; i++) {
// 		if(i===1) {
// 			line.push(diagonal[diagonal.length-1])
// 		}
// 		line.push(line[i-1] + 2)
// 	}
// 	let result = line.reduce((sum, current) => sum + current, 0);
// 	return result
// }

// const obj = {
// 	id: 11,
// 	content: 'asa'
// }
// // console.log(obj)
// Object.defineProperty(obj, 'id', {
// 	writable: false
// })

// obj.id = 12
// obj.content = "retrttr"

// console.log(obj)


 

// console.log(1)
// console.log(2)

// let p = new Promise((res, rej) => {
// 	console.log(3)
// 	res("Hello")
// 	console.log(4)
// })

// console.log(p)

// console.log(5)

// p.then(data => {
// 	console.log(6)
// 	return data + 1
// })
// .then(data => {
// 	console.log('data ' + data)
// })
// .then(()=> {
// 	console.log(7)
// })
// .then(console.log(p))

// console.log(8)


let p1 = new Promise((res, rej) => {
	rej("Somethig wrong")
})

p1
.then((_, err) => {
	console.log(err)
	throw new Error(err)
})
// .catch(()=>{
// 	console.log('error1')

// })
.then(()=> {
	console.log('then')
})
// .catch((err)=> {
// 	console.log(err)
// }) 



// const unsubscribe = someStore.$onAction(
// 	({
// 		name, // name of the action
// 		store, // store instance, same as `someStore`
// 		args, // array of parameters passed to the action
// 		after, // hook after the action returns or resolves
// 		onError, // hook if the action throws or rejects
// 	}) => {
// 		// a shared variable for this specific action call
// 		const startTime = Date.now()
// 		// this will trigger before an action on `store` is executed
// 		console.log(`Start "${name}" with params [${args.join(', ')}].`)

// 		// this will trigger if the action succeeds and after it has fully run.
// 		// it waits for any returned promised
// 		after((result) => {
// 			console.log(
// 				`Finished "${name}" after ${Date.now() - startTime
// 				}ms.\nResult: ${result}.`
// 			)
// 		})

// 		// this will trigger if the action throws or returns a promise that rejects
// 		onError((error) => {
// 			console.warn(
// 				`Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
// 			)
// 		})
// 	}
// )

// // manually remove the listener
// unsubscribe()

// FEEL FREE TO SPEND AS MUCH TIME AS YOU NEED
// const cookieString = 'foo=bar; equation=value';

// const parseCookie = (str) => {
// 	// your solution here
// 	const args  =  str.split('; ')
// 	const result = {}
// 	args.forEach((i)=>{
// 		const key = i.split('=')[0]
// 		const value = i.split('=')[1]
// 		result[key] = value;
// 	})
// 	return result
// }

// parseCookie(cookieString); // result should be { foo: 'bar', equation: 'value' }"
