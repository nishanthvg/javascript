let person = {
    name :'Nishanth' ,
    age : 10  
};

console.log(person);

//Dot notation 
console.log(person.name);
//bracket notation 
person['name'] = 'mary' ;

console.log(person.name);
//brackets notation can be used dynamically
let selection = 'name';
person[selection] = 'Ahill';
console.log(person.name);
