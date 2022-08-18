class Company {

    constructor() {
        this.departments = []
    }

    addEmployee(name, salary, position, department) {
        if (salary < 0) {
            throw new Error(`Invalid input!`)
        }

        if (name && salary && position && department) {
            let employee = {
                name: name,
                salary: salary,
                position: position,
                department: department
            }
            this.departments.push(employee)
            console.log(`New employee is hired. Name: ${name}. Position: ${position}`)
           
        } else {
            throw new Error(`Invalid input!`)
        }

    }

    bestDepartment(){

        let result = []

        for (const dept of this.departments) {
            
            result[dept.department] = dept.salary
            
        }

        console.log(result);


    }
}

let c = new Company();
c.addEmployee(`Stanimir`, 2000, `engineer`, `Construction`);
c.addEmployee(`Pesho`, 1500, `electrical engineer`, `Construction`);
c.addEmployee(`Slavi`, 500, `dyer`, `Construction`);
c.addEmployee(`Stan`, 2000, `architect`, `Construction`);
c.addEmployee(`Stanimir`, 1200, `digital marketing manager`, `Marketing`);
c.addEmployee(`Pesho`, 1000, `graphical designer`, `Marketing`);
c.addEmployee(`Gosho`, 1350, `HR`, `Human resources`);
c.bestDepartment()

console.log(c.departments[0]);