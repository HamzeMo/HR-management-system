var idgen = (function(){var id=1000;return function(){if(arguments[0]===0)id=0;return id++;}})();
const employees = [
    {
      id: idgen(),
      fullName: "Ghazi Samer",
      department: "Administration",
      level: "Senior",
      imageUrl: "https://thumbs.dreamstime.com/b/man-handsome-mature-employee-wear-formal-suit-business-career-concept-man-handsome-mature-employee-wear-formal-suit-business-193163038.jpg",
      generateEmployeeId: function() {
        return idgen();
      },
    },
    {
      id: idgen(),
      fullName: "Lana Ali",
      department: "Finance",
      level: "Senior",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReOx5_EINdfM9xQxjABxzPBjoIPDpgcR5dteiWXP1Kqk6RZ5dGKGCgXn-XThL0gLVYzyo&usqp=CAU.jpg",
      generateEmployeeId: function() {
        return idgen();
      },
    },
    {
      id: idgen(),
      fullName: "Tamara Ayoub",
      department: "Marketing",
      level: "Senior",
      imageUrl: "https://img.freepik.com/premium-photo/happy-female-office-employee-formal-white-shirt-expressing-confidence-standing-with-arms-crossed-while-thinking-about-work-day-isolated-light-wall-confident-business-woman-posing-studio_95891-4559.jpg",
      generateEmployeeId: function() {
        return idgen();
      },
    },
    {
      id: idgen(),
      fullName: "Safi Walid",
      department: "Administration",
      level: "Mid-Senior",
      imageUrl: "https://img.freepik.com/premium-photo/mature-employee-business-suit-white-background_474717-70122.jpg",
      generateEmployeeId: function() {
        return idgen();
      },
    },
    {
      id: idgen(),
      fullName: "Omar Zaid",
      department: "Development",
      level: "Senior",
      imageUrl: "https://thumbs.dreamstime.com/b/handsome-confident-businessman-standing-his-hands-pockets-42538103.jpg",
      generateEmployeeId: function() {
        return idgen();
      },
    },
    {
      id: idgen(),
      fullName: "Rana Saleh",
      department: "Development",
      level: "Junior",
      imageUrl: "https://www.shutterstock.com/image-photo/young-asian-business-woman-smiling-260nw-2160057221.jpg",
      generateEmployeeId: function() {
        return idgen();
      },
    },
    {
      id: idgen(),
      fullName: "Hadi Ahmad",
      department: "Finance",
      level: "Mid-Senior",
      imageUrl: "https://www.shutterstock.com/image-photo/smiling-young-business-man-wearing-260nw-285687404.jpg",
      generateEmployeeId: function() {
        return idgen();
      },
    },
  ];
  
  function calculateSalary(level) {
    let min, max;
    switch (level) {
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
  
  
  function renderEmployees() {
    const output = document.getElementById("output");
    employees.forEach((employee) => {
      const { fullName, level } = employee;
      const { netSalary } = calculateSalary(level);
      output.innerHTML += `Employee name: ${fullName}<br>Employee salary: ${netSalary}<br><br>`;
    });
    window.addEventListener("DOMContentLoaded", renderEmployees);

  }

  
  window.addEventListener("DOMContentLoaded", renderEmployees);
  