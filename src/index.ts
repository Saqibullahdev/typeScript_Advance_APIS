//pick in typescript


interface User{
    id: number;
    name: string;
    email: string;
    age: number;
}


type UpdateUser=Pick<User,"name" | "email">


function UpdateUser(id:number, user:UpdateUser){
    //code

    return {
        "username":user.name,
        "email":user.email	
    }
}

console.log(UpdateUser(1,{name:"John",email:"saqib@gmail.com"}))


// partial in typescript


type Employee={
    id:number;
    name:string;
    email:string;
    age:number;
}

type UpdateEmploye=Pick<Employee, "name" | "email">

type UpdateEmployePartial=Partial<Employee>


function UpdateEmploye(id:number, user:UpdateEmployePartial){
    //code

    return {
        "username":user.name,
        "email":user.email	
    }
}

console.log(UpdateEmploye(1,{name:"John"}))

//readonly in typescript
console.log('------------------------ readonly in typescript ------------------------')

interface DbConfig{
    host:string;
    port:number;
    username:string;
    password:string;
}

type ReadonlyDbConfig=Readonly<DbConfig>

const dbConfig:ReadonlyDbConfig={
    host:"localhost",
    port:3306,
    username:"root",
    password:"root"
}

console.log(dbConfig);

// dbConfig.host=23232;  create error because it is readonly


//another example

console.log('------------------------ another example ------------------------')


interface HTTPStatus{
    code:number;
    message:string;
}

type ReadonlyHTTPStatus=Readonly<HTTPStatus>

const NotFound:ReadonlyHTTPStatus={
    code:404,
    message:"Not Found"
}

const OK:ReadonlyHTTPStatus={
    code:200,
    message:"OK"
}


function GetHTTPStatus(status:ReadonlyHTTPStatus){
    return status;
}

console.log(GetHTTPStatus(NotFound))


//record in typescript

console.log('------------------------ record in typescript ------------------------')

interface Product{
    id:number;
    name:string;
    price:number;
}

type ProductRecord=Record<string,Product>

const Products:ProductRecord={
    "1":{
        id:1,
        name:"Product 1",
        price:100
    },

    "2":{
        id:2,
        name:"Product 2",
        price:200,
    }
    }


    for (const key in Products) {
        console.log(Products[key])
    }

    console.log("----------------- another example -----------------")


    interface UserInfo{
        id:number;
        name:string;
        email:string;
    }

    type TypeOfUserObject= {[key:string]:UserInfo} //manually create record type

    const Users:TypeOfUserObject={
        "1":{
            id:1,
            name:"John",
            email:"xyz@gmail.com"},

        "2":{
            id:2,
            name:"Doe",
            email:"john@gmail.com"
        }    

    }



    //Maps in typescript ,but also concept of javascript
    console.log('------------------------ Maps in typescript ------------------------')

    interface Animals{
        name:string;
        age:number;
    }

    const animal=new Map<number,Animals>();
    animal.set(1,{name:"Dog",age:2});
    animal.set(2,{name:"Cat",age:3});

    for (const [key,value] of animal) {
        console.log(key,value)
    }
    console.log(animal.get(1))



    //exclude in typescript

    console.log('------------------------ exclude in typescript ------------------------')

    type Events= "click" | "mouseover" | "mouseout" | "keydown" | "keyup";
    type excludeEvents=Exclude<Events,"keydown" | "keyup">


    function handleEvent(event:excludeEvents){
        console.log(event)
    }

    // handleEvent("keyup") //create error because keyup is excluded


    //inferenced in typescript

    console.log('------------------------ inferenced in typescript ------------------------')

    interface UserSchema{
        _id:number;
        name:string;
        email:string;
        createdAt:Date;
    }


    type UserSchemaType=ReturnType<typeof UserSchema>