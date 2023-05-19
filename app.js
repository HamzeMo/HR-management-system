// Define the employee objects
const employees = [
    {
      id: generateEmployeeId(),
      fullName: "Ghazi Samer",
      department: "Administration",
      level: "Senior",
      imageUrl: "https://thumbs.dreamstime.com/b/man-handsome-mature-employee-wear-formal-suit-business-career-concept-man-handsome-mature-employee-wear-formal-suit-business-193163038.jpg",
    },
    {
      id: generateEmployeeId(),
      fullName: "Lana Ali",
      department: "Finance",
      level: "Senior",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReOx5_EINdfM9xQxjABxzPBjoIPDpgcR5dteiWXP1Kqk6RZ5dGKGCgXn-XThL0gLVYzyo&usqp=CAU.jpg",
    },
    {
      id: generateEmployeeId(),
      fullName: "Tamara Ayoub",
      department: "Marketing",
      level: "Senior",
      imageUrl: "https://img.freepik.com/premium-photo/happy-female-office-employee-formal-white-shirt-expressing-confidence-standing-with-arms-crossed-while-thinking-about-work-day-isolated-light-wall-confident-business-woman-posing-studio_95891-4559.jpg",
    },
    {
      id: generateEmployeeId(),
      fullName: "Safi Walid",
      department: "Administration",
      level: "Mid-Senior",
      imageUrl: "https://img.freepik.com/premium-photo/mature-employee-business-suit-white-background_474717-70122.jpg",
    },
    {
      id: generateEmployeeId(),
      fullName: "Omar Zaid",
      department: "Development",
      level: "Senior",
      imageUrl: "https://thumbs.dreamstime.com/b/handsome-confident-businessman-standing-his-hands-pockets-42538103.jpg",
    },
    {
      id: generateEmployeeId(),
      fullName: "Rana Saleh",
      department: "Development",
      level: "Junior",
      imageUrl: "https://www.shutterstock.com/image-photo/young-asian-business-woman-smiling-260nw-2160057221.jpg",
    },
    {
      id: generateEmployeeId(),
      fullName: "Hadi Ahmad",
      department: "Finance",
      level: "Mid-Senior",
      imageUrl: "https://www.shutterstock.com/image-photo/smiling-young-business-man-wearing-260nw-285687404.jpg",
    },
  ];
  
  // Generate a unique four-digit employee ID
  function generateEmployeeId() {
    return Math.floor(Math.random() * 9000) + 1000;
  }
  
  // Calculate the salary based on employee level
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
  
  // Render employee information on the home page
  function renderEmployees() {
    const output = document.getElementById("output");
    employees.forEach((employee) => {
      const { fullName, level } = employee;
      const { netSalary } = calculateSalary(level);
      output.innerHTML += `Employee name: ${fullName}<br>Employee salary: ${netSalary}<br><br>`;
    });
    window.addEventListener("DOMContentLoaded", renderEmployees);

  }

  // Call the renderEmployees function when the page is loaded
  window.addEventListener("DOMContentLoaded", renderEmployees);
  