

const person = {
    name:"sam",
    age:23,
    place:"chennai",
    dept:"it"
}

//listing properties
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
//modify
person.age=31
delete person.place
//retrieve using for loop
for(key in person){
    console.log(key)
    console.log(person[key])
}

//sorting
const users =[
    {name:"alice",age:30,dept:"it"},
    {name:"charlie",age:35,dept:"hr"},
    {name:"bob",age:25,dept:"cms"}
]

users.sort((a,b)=> a.age - b.age)
console.log(users)

users.sort((a,b)=> a.name.localeCompare(b.name))
console.log(users)

users.sort((a,b)=> a.dept.localeCompare(b.dept))
console.log(users)

//contains
console.log("name" in person)
console.log("hobby" in person)