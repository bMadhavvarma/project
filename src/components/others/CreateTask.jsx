import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle || !date || !assignTo || !category || !description) {
      alert("Please fill out all fields before submitting.");
      return;
    }
  
    const newTask = {
      taskTitle,
      date,
      assignTo,
      category,
      description,
      active: true,
      completed: false,
      failed: true,
      newTask: true,
    };
  
    // Fetch existing employee data or initialize an empty array if not present
    const data = JSON.parse(localStorage.getItem("employees")) || [];
  
    data.forEach((employee) => {
      if (assignTo === employee.firstName) {
        employee.tasks.taskDetails = employee.tasks.taskDetails || [];
        employee.tasks.taskDetails.push(newTask);
        // Save the updated data back to localStorage
        localStorage.setItem("employees", JSON.stringify(data));
      }
    });
   
    // Clear the form fields
    setTaskTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
  };
  

  return (
    <div className="bg-zinc-800 p-6 text-white flex flex-col md:flex-row justify-between gap-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-5 w-full"
      >
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          {[
            {
              id: "taskTitle",
              label: "Task Title",
              value: taskTitle,
              onChange: setTaskTitle,
              placeholder: "Make a UI design",
              type: "text",
            },
            {
              id: "date",
              label: "Date",
              value: date,
              onChange: setDate,
              type: "date",
            },
            {
              id: "assignTo",
              label: "Assign to",
              value: assignTo,
              onChange: setAssignTo,
              placeholder: "Employee Name",
              type: "text",
            },
            {
              id: "category",
              label: "Category",
              value: category,
              onChange: setCategory,
              placeholder: "design, dev, etc..",
              type: "text",
            },
          ].map(({ id, label, value, onChange, placeholder, type }) => (
            <React.Fragment key={id}>
              <label htmlFor={id} className="text-zinc-300 text-xl">
                {label}
              </label>
              <input
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                type={type}
                placeholder={placeholder || ""}
                className="text-xl font-semibold w-full lg:w-[35vw] p-1 rounded bg-transparent border-zinc-600 border-2 outline-none"
              />
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <label htmlFor="description" className="text-zinc-300 text-xl">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            placeholder="Add task details..."
            rows="9"
            className="rounded p-1 text-white bg-transparent border-zinc-600 border-2 text-lg outline-none"
          ></textarea>

          <motion.button
            whileTap={{ scale: 0.8, duration: 0.01 }}
            type="submit"
            className="bg-green-700 p-2 font-semibold text-xl rounded hover:bg-green-800"
          >
            Create Task
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
