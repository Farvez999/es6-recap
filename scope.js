//1. gobal scope
//2. block scope
//3. local scope or funcation scope

// let x = 5; // gobal scope

// {
//     x = 10; // block scope
//     console.log('insite block', x);
// }
// console.log('outsite block', x);



// local scope or funcation scope
function add() {
    const total = 3 + 5;
    console.log('', total);
}

add();
// console.log(total);