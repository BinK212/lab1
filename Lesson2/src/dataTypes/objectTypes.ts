// // Array
// const arr:Array<string> = ["a", "b", "c", "d", "e"];

// const arrNum:number[]=[1,2,3];

// const arr2:Array<Array<number>> = [[1,2,3],[1,2,3,4]];

// // Tuples

// const tuple:[string, string, number] = ["Van Hoa" , "Hai Duong" , 20]

// // Enum

// enum ROLE{ADMIN,USER}

// const role:ROLE = ROLE.USER

// console.log(role);

// enum STATUS_CODE{SUCSSEC=200,CLIENT_ERROR=400,SERVER_ERROR}

// const  code:STATUS_CODE = STATUS_CODE.SUCSSEC


enum LEVER{STAFF,MANAGER}

//properties

interface User{
    username:string
    password:string
    email:string
}

//Method

interface User{
    login:()=>void,
    logout:()=>void

}