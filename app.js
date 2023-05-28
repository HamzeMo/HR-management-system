
function Employees(name, departments, levels, image) {

    this.employeeId = EmployeesID();
    this.fullName = name;
    this.department = departments;
    this.level = levels;
    this.ImageUrl = image;
    this.salary = Salary(levels);


    function EmployeesID() {
        return Math.floor(Math.random() * 9999) + 1000;
    }

    function Salary(level) {
        let salaryTable = {
            Junior: { min: 500, max: 1000 },
            'Mid-Senior': { min: 1000, max: 1500 },
            Senior: { min: 1500, max: 2000 }
        };

        let { min, max } = salaryTable[level];
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

let divE=document.createElement("div");
let body=document.getElementsByTagName("body")[0];
body.appendChild(divE);

let empImg=document.createElement("img");
empImg.src=this.ImageUrl;
empImg.alt=this.fullName;
empImg.style.maxWidth = "80%";
divE.appendChild(empImg);

let employeeName=document.createElement("p");
employeeName.textContent=`Name: ${this.fullName} - ID: ${this.employeeId}`;
divE.appendChild(employeeName);

let departmentEmp=document.createElement("p");
departmentEmp.textContent=`Department: ${this.department} - Level: ${this.level}`;
divE.appendChild(departmentEmp);

let empSalary=document.createElement("p");
empSalary.textContent= this.salary;
divE.appendChild(empSalary);

divE.style.border="5px solid #e6e6e6";
divE.style.background= "#e6e6e6";
divE.style.borderRadius= "15px";
divE.style.padding="30px"
divE.style.textAlign="center"
divE.style.fontWeight="bold"
divE.style.width="280px";
divE.style.fontFamily="Arial, Helvetica, sans-serif"
divE.style.fontSize = "15px";
divE.style.margin= "40px"
divE.style.display= "inline-block";
divE.style.flexWrap= "wrap";
}

let Ghazi = new Employees("Ghazi Samer","Administration","Senior","./assets/Ghazi.jpg");
let Lana = new Employees("Lana Ali","Finance","Senior", "./assets/Lana.jpg");
let Tamara = new Employees("Tamara Ayoub","Marketing","Senior", "./assets/Tamara.jpg");
let Safi = new Employees("Safi Walid","Administration","Mid-Senior", "./assets/Safi.jpg");
let Omar = new Employees("Omar Zaid", "Development", "Senior", "./assets/Omar.jpg");
let Rana = new Employees("Rana Saleh", "Development","Junior", "./assets/Rana.jpg");
let Hadi = new Employees("Hadi Ahmad","Finance","Mid-Senior", "./assets/Hadi.jpg");

console.log(Ghazi);
console.log(Lana);
console.log(Tamara);
console.log(Safi);
console.log(Omar);
console.log(Rana);
console.log(Hadi);

