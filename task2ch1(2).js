let company = {
    marketing: [
        {
            name: "Budi",
            salary: 5000000,
        },
        {
        name: "Agus",
        salary: 4500000,
        },
    ],
        engineer: {
            frontend: [
                {
                    name: "Suci",
                    salary: 8500000,
                },
            {
                    name: "Lukito",
                    salary: 7000000,
                },
            ],
        backend: [
            {
                name: "Bustomi",
                salary: 9500000,
            },
        ],
        devops: [
            {
                name: "Paul",
                salary: 9000000,
            },
        ],
    },
}

function totalSalary(obj) {
    let total = 0;
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            obj[key].forEach((employee) => {
                total += employee.salary;
            });
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
            total += totalSalary(obj[key]);
        }
    }
    return total;
}

console.log("Total Salary:", totalSalary(company));