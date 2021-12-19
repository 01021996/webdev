//In JS,objects are key -Value pairs

let obj={} //object declaration

let person={
    firstname: 'Saksham',
    lastname: 'Jain',
    age: 25,
    friends:['Anmol','Praful','Kunal'],
    isAvenger:true,
    address:{
        state:'MP',
        city: 'Jabalpur'
    },
    sayHi: function(){
        console.log('Captain says Hi')
    }
}

//DOT NOTATION
//console.log(person.friends[2])
//console.log(person.sayHi())  undefined also comes
//person.sayHi()
//console.log(person.address.state)

//BRACKET NOTATION
// console.log(person['firstname'])
// console.log(person['friends'])

//LOOP
//FOR IN LOOP- since objects are not ordered ,therefore cant use for loop
for(let key in person) //for every key in the person object
{
    console.log('Key is ',key ,'  Value is ',person[key])
}


//objects manipulation
console.log(person.isAvenger)
person.isAvenger=false
console.log(person.isAvenger)

//New properties addition
person.movies=['avengers','spiderman']
console.log(person)

//delete a property
delete person.isAvenger
console.log(person)


