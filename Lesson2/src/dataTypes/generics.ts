
function showStringData(a: string): string {
    return a
}

function showNumberData(b: number): number {
    return b
}
// Generic
function showData<T>(a: T): T {
    return a
}

showData<number>(10)

const strArr = ["Hoa", "Duy", "Vu Anh"]


// function we17305_map1<T>(arr: T[], callback: (item: T, index: number) => T): T[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i], i)
//         temp.push(newItem)
//     }
//     return temp
// }

// const data =we17305_map1(strArr,(item,index)=>{
//     return item+"-we17305"
// })

// console.log(data, "we17305_map1");