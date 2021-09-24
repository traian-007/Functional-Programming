let arr =[]
let a = 1
let b = 0
let v = 0
function fibonacciRecursiv(num){
    arr.push(a)      
    a = arr[v]+ b 
    b = arr[v]
    v++
    if(num <= 1){
        return console.log(b);
    }
    return fibonacciRecursiv(num - 1) 
}

fibonacciRecursiv(6)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const arr2 = [1,2,3,4,5,6]
// const compose = (...functions)=>([...arg])=>functions.reduce((newArg,func) => func(newArg),[...arg]) 

// function a1(arr){
//     return arr.map(el=>el+1)
// }
// function a2(arr){
//     return arr.filter(el=>el>3)
// }
// function a3(arr){
//     return arr.reduce((acc,el)=>acc+el)
// }

// console.log(compose(a1,a2,a3)(arr2))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function ab(el){
//     return el+1
// }

// function ac(el) {
//     return el===6
// }
// const arr =[1,2,3,4,5]


// const map = (array, fn) => {
//     return array.reduce((acc,el) => [...acc,fn(el)],[])
//  }
// const filter = (array, fn) => {
//     return array.reduce((acc,el) => fn(el) ? [...acc,el]:[...acc],[])
//  }

// const some = (array, fn) => {
//     return array.reduce((acc,el) => fn(el) ? acc = true : acc,false)
//  }

// const every = (array, fn) => {
//     return array.reduce((acc,el) => fn(el)? acc :acc = false, true)
//  }

// console.log(map(arr,ab))
// console.log(filter(arr,ac))
// console.log(some(arr,ac))
// console.log(every(arr,ac))