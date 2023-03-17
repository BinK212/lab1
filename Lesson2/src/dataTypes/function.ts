// // function declarations
// // function fun1(){
//     // hosting function
// //     console.log("fun1");    
// // }

// //  const  fun2 = function() {  
// //     console.log("fun2");

// // }

// // const  fun3 = ()=> {  
// //     console.log("fun2");

// // }
// // let num1:number;

// // function logger(): void{
// //     console.log("them moi thanh cong")

// // }

// // function showError(): never {
// //     const error = new Error("Something went wrong!")
// //     throw error;
// // }


// // 3. Function parameter
// // function sum(a: number, b: number = 0): number {
// //     return a + b
// // }

// // console.log(sum(10, -1));


// // function showName(): string {
// //     return;
// // }


// // 5. callback


// const numArr = [ 1 , 2, 3, 4]

// const we17305_map = function(arr: number[],callback?: (item: number,) =>number){
//     const temp : number[ ] = [];

//     for(let i = 0; i < arr.length; i++){
//         const newItem = callback(arr[i]);
//         temp.push(newItem);
//     }
//     return temp;
// }

//     const result = we17305_map(numArr,(item)=>{
//         return item * 2;
//     })

//     console.log(result);



