const isStudent = false;

if (isStudent === true) {
    console.log('He is a Student');
}
else if (isStudent === false) {
    console.log('He is a not Student');
}

//Ternary
const sentece = isStudent === true ? 'He is a Student' : 'He is a not Student';
console.log(sentece);