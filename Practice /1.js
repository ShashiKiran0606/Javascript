// let num1= window.prompt("Enter Number1 : ");
// let num2= window.prompt("Enter Number2 : ");

// window.alert(`addition of ${num1} and ${num2} is ${+num1 + +num2}`);


    // let password = 'Hello_2025';
    // console.log(`Password Without Encryption: ${password}`);

    let employees = [
        { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
        { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
        { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
        { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
        { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
    ];
    console.log(employees);
    console.table(employees,['name','sal']);
