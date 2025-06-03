console.log("Hello");

let employees = [
    {
        name: "Иван",
        age: 30,
        gender: "мужской",
        phone: {
            home: "123-45-67",
            mobile: "89012345678"
        }
    },
    {
        name: "Мария",
        age: 25,
        gender: "женский",
        phone: {
            home: "234-56-78",
            mobile: "89123456789"
        }
    },
    {
        name: "Алексей",
        age: 28,
        gender: "мужской",
        phone: {
            home: "345-67-89",
            mobile: "89234567890"
        }
    }
];

employees.push({
    name: "Елена",
    age: 32,
    gender: "женский",
    phone: {
        home: "456-78-90",
        mobile: "89345678901"
    }
});

employees.unshift({
    name: "Дмитрий",
    age: 27,
    gender: "мужской",
    phone: {
        home: "567-89-01",
        mobile: "89456789012"
    }
});

const employeesOver25 = employees.filter(employee => employee.age > 25);

const employeeNames = employees.map(employee => employee.name);

employees.forEach(employee => {
    console.log(`Имя: ${employee.name}, Возраст: ${employee.age}, Пол: ${employee.gender}, Домашний: ${employee.phone.home}, Сотовый: ${employee.phone.mobile}`);
});