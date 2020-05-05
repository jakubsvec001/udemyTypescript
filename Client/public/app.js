// function add(n1: number, n2: number, showResult: boolean, phrase: string){
//   const result = n1 + n2;
//   if (showResult){
//     console.log(phrase + result);
//   } else {
//     return result
//   }
// }
// let number1: number = 5;
// const number2 = 10;
// const phrase = 'The sum is: '
// const result = add(number1, number2, true, phrase);
// console.log(result)
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]
// } = {
//   name: 'Maximilian',
//   age: 33,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }
// enum Role { ADMIN, READ_ONLY, AUTHOR};
// const person = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: 4,
// }
// console.log(person.hobbies)
// person.role.push('admin')
// console.log(person.role)
// for (const hobby of person.hobbies) {
//   console.log(hobby)
// }
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + ' ' + input2.toString();
    }
    return result;
}
console.log(combine(2, 3));
console.log(combine('Max', 'Anna'));
