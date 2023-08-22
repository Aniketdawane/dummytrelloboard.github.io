import React, { useState } from "react";
import Select from "react-select";

const initialData = {
  labels: {
    priority: "Priority",
    status: "Status",
  },
  status: ["ToDo", "Doing", "Reviews"],
  priority: ["Low", "Medium", "High"],
  data: [
    { id: "1", title: "Add Tea To Code", status: "ToDo", priority: "Medium" },
    {
      id: "2",
      title: "white Addintion 10 numbers",
      status: "Doing",
      priority: "Low",
    },
    {
      id: "3",
      title: "Write Comment Syntax for react js",
      status: "Reviews",
      priority: "High",
    },
    {
      id: "4",
      title: "Write Datatypes in javaScript ",
      status: "ToDo",
      priority: "Low",
    },
    {
      id: "5",
      title: "Write A list of events in HTML",
      status: "Doing",
      priority: "Medium",
    },
    {
      id: "6",
      title: "What is Synchronus and Asynchronus",
      status: "Doing",
      priority: "High",
    },
    {
      id: "7",
      title: "What Are Hooks in React Js",
      status: "Reviews",
      priority: "Low",
    },
    {
      id: "8",
      title: "Expain Rounting in react js",
      status: "Doing",
      priority: "Medium",
    },
    {
      id: "9",
      title: "Explain Class based Components and function based components",
      status: "ToDO",
      priority: "Low",
    },
    { id: "10", title: "What is SDLC ?", status: "Reviews", priority: "High" },
  ],
};

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: "All", value: null },
    ...initialData.priority.map((prio) => ({ label: prio, value: prio })),
    ...initialData.status.map((stat) => ({ label: stat, value: stat })),
  ];

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  const filteredData = initialData.data.filter((item) => {
    if (!selectedOption) return true;
    return (
      (selectedOption.value === item.priority &&
        initialData.priority.includes(item.priority)) ||
      (selectedOption.value === item.status &&
        initialData.status.includes(item.status))
    );
  });

  return (
    <div>
      <div style={{ width: "200px" }}>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
        />
      </div>
      <div>
        <h2>Filtered Data:</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.status}</td>
                <td>{item.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
