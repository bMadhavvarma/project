const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": {
      "active": 1,
      "completed": 1,
      "newTask": 1,
      "failed": 0,
      "taskDetails": [
        {
          "taskTitle": "Prepare Monthly Report",
          "taskDescription": "Compile and summarize sales data for the month.",
          "taskDate": "2024-11-20",
          "category": "Reports",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Team Meeting",
          "taskDescription": "Discuss upcoming project deadlines and progress.",
          "taskDate": "2024-11-21",
          "category": "Meetings",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update CRM Data",
          "taskDescription": "Ensure client contact information is up to date.",
          "taskDate": "2024-11-19",
          "category": "Data Management",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  },
  {
    "id": 2,
    "firstName": "Ishita",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": {
      "active": 1,
      "completed": 1,
      "newTask": 1,
      "failed": 1,
      "taskDetails": [
        {
          "taskTitle": "Onboard New Employee",
          "taskDescription": "Assist in setting up new employee systems and accounts.",
          "taskDate": "2024-11-18",
          "category": "HR",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Client Presentation",
          "taskDescription": "Prepare slides for upcoming client pitch.",
          "taskDate": "2024-11-22",
          "category": "Presentations",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Schedule Vendor Meeting",
          "taskDescription": "Coordinate and confirm time for vendor call.",
          "taskDate": "2024-11-20",
          "category": "Meetings",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Fix Bug #324",
          "taskDescription": "Resolve critical issue in application module.",
          "taskDate": "2024-11-19",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    }
  },
  {
    "id": 3,
    "firstName": "Vikram",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": {
      "active": 2,
      "completed": 1,
      "newTask": 1,
      "failed": 0,
      "taskDetails": [
        {
          "taskTitle": "Review Code",
          "taskDescription": "Perform code review for the latest pull request.",
          "taskDate": "2024-11-19",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update Documentation",
          "taskDescription": "Ensure API documentation is accurate.",
          "taskDate": "2024-11-18",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "System Maintenance",
          "taskDescription": "Perform regular maintenance checks on servers.",
          "taskDate": "2024-11-20",
          "category": "IT",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  },
  {
    "id": 4,
    "firstName": "Meera",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": {
      "active": 1,
      "completed": 1,
      "newTask": 2,
      "failed": 0,
      "taskDetails": [
        {
          "taskTitle": "Create Marketing Campaign",
          "taskDescription": "Develop campaign for holiday season promotion.",
          "taskDate": "2024-11-25",
          "category": "Marketing",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Analyze Survey Results",
          "taskDescription": "Summarize key insights from customer feedback survey.",
          "taskDate": "2024-11-18",
          "category": "Analysis",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Plan Team Outing",
          "taskDescription": "Organize venue and itinerary for annual outing.",
          "taskDate": "2024-11-23",
          "category": "HR",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  },
  {
    "id": 5,
    "firstName": "Ananya",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": {
      "active": 2,
      "completed": 0,
      "newTask": 1,
      "failed": 0,
      "taskDetails": [
        {
          "taskTitle": "Optimize Database Queries",
          "taskDescription": "Improve performance of frequently run queries.",
          "taskDate": "2024-11-22",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Prepare Training Material",
          "taskDescription": "Draft slides and handouts for employee training.",
          "taskDate": "2024-11-21",
          "category": "Training",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Conduct Performance Reviews",
          "taskDescription": "Schedule and execute reviews with team members.",
          "taskDate": "2024-11-24",
          "category": "HR",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    }
  }
];

const admin =[
    {
      "id": 1,
      "firstName": "Madhav",
      "email": "admin@me.com",
      "password": "123"
    }
]
export const setlocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees)); // Save employees as a string
  localStorage.setItem('admin', JSON.stringify(admin));         // Save admin as a string
};
export const getlocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || null;
  return { employees, admin };
};

