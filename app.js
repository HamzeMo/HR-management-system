function Employees (  id, Name , section , level , image ){
  this.id = id;
  this.fullName = Name;
  this.department = section;
  this.level = level;
  this.imageUrl = image;
  this.salary = this.calculateSalary();
}

var idgen = (function(){var id=1000;return function(){if(arguments[0]===0)id=0;return id++;}})();



Employees.prototype.calculateSalary = function () {
    let min, max;
    switch (this.level) {
      case "Senior":
        min = 1500;
        max = 2000;
        break;
      case "Mid-Senior":
        min = 1000;
        max = 1500;
        break;
      case "Junior":
        min = 500;
        max = 1000;
        break;
      default:
        min = 0;
        max = 0;
    }
    const randomSalary = Math.floor(Math.random() * (max - min + 1)) + min;
    const netSalary = randomSalary - randomSalary * 0.075;
    return { randomSalary, netSalary };
  }
  
 
  Employees.prototype.render = function () {
    document.write(
      " <p> Employees id: " + this.id + " </p>"    + 
      " <p> Employees name: " + this.fullName + " </p>"    + 
      " <p>Department: " + this.department  + "</p>" + 
      "<p> Employees salary: " + this.salary.randomSalary) + "</p>"  }
  const employees = [
    new Employees( idgen(), "Ghazi Samer",  "Administration",  "Senior", "https://thumbs.dreamstime.com/b/man-handsome-mature-employee-wear-formal-suit-business-career-concept-man-handsome-mature-employee-wear-formal-suit-business-193163038.jpg"),
    new Employees(idgen(), "Lana Ali", "Finance", "Senior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReOx5_EINdfM9xQxjABxzPBjoIPDpgcR5dteiWXP1Kqk6RZ5dGKGCgXn-XThL0gLVYzyo&usqp=CAU.jpg"),
    new Employees(idgen(), "Tamara Ayoub", "Marketing", "Senior", "https://img.freepik.com/premium-photo/happy-female-office-employee-formal-white-shirt-expressing-confidence-standing-with-arms-crossed-while-thinking-about-work-day-isolated-light-wall-confident-business-woman-posing-studio_95891-4559.jpg"),
    new Employees(idgen(),"Safi Walid", "Administration","Mid-Senior","https://img.freepik.com/premium-photo/mature-employee-business-suit-white-background_474717-70122.jpg" ),
    new Employees(idgen(),"Omar Zaid","Development","Senior","https://thumbs.dreamstime.com/b/handsome-confident-businessman-standing-his-hands-pockets-42538103.jpg"  ),
    new Employees(idgen(),"Rana Saleh","Development","Junior","https://www.shutterstock.com/image-photo/young-asian-business-woman-smiling-260nw-2160057221.jpg" ),
    new Employees(idgen(), "Hadi Ahmad", "Finance", "Mid-Senior", "https://www.shutterstock.com/image-photo/smiling-young-business-man-wearing-260nw-285687404.jpg")
  ];
  
  employees.forEach(function (employee) {
    employee.render();
  });
  