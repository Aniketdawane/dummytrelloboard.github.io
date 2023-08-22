// import React, { useState } from "react";
// import Select from "react-select";

// const data = [
//   {
//     status: ["ToDo", "Doing", "Reviews"],
//     priority: ["Low", "Medium", "High"],
//     tasks: [
//       { id: "1", title: "Add Tea To Code", status: "ToDo", priority: "Medium" },
//       {
//         id: "2",
//         title: "white Addintion 10 numbers",
//         status: "Doing",
//         priority: "Low",
//       },
//       {
//         id: "3",
//         title: "Write Comment Syntax for react js",
//         status: "Reviews",
//         priority: "High",
//       },
//       {
//         id: "4",
//         title: "Write Datatypes in javaScript",
//         status: "ToDo",
//         priority: "Low",
//       },
//       {
//         id: "5",
//         title: "Write A list of events in HTML",
//         status: "Doing",
//         priority: "Medium",
//       },
//       {
//         id: "6",
//         title: "What is Synchronous and Asynchronous",
//         status: "Doing",
//         priority: "High",
//       },
//       {
//         id: "7",
//         title: "What Are Hooks in React Js",
//         status: "Reviews",
//         priority: "Low",
//       },
//       {
//         id: "8",
//         title: "Explain Routing in React Js",
//         status: "Doing",
//         priority: "Medium",
//       },
//       {
//         id: "9",
//         title: "Explain Class-based Components and Function-based Components",
//         status: "ToDo",
//         priority: "Low",
//       },
//       {
//         id: "10",
//         title: "What is SDLC?",
//         status: "Reviews",
//         priority: "High",
//       },
//     ],
//   },
// ];

// const options = [
//   { value: "priority", label: "priority" },
//   { value: "Status", label: "Status" },
// ];

// const App = () => {
//   const [selectedStatus, setSelectedStatus] = useState(data);
//   const [selectedOption, setSelectedOption] = useState(options[0]);
//   const [filteredTasks, setFilteredTasks] = useState(data[0].tasks);
//   console.log(selectedStatus);

//   const handleOptionChange = (selected) => {
//     setSelectedOption(selected);

//     if (selected.value === "status") {
//       setFilteredTasks(data[0].tasks);
//     } else if (selected.value === "priority") {
//       // Sorting tasks by priority
//       const sortedTasks = [...data[0].tasks].sort((a, b) =>
//         a.priority.localeCompare(b.priority)
//       );
//       setFilteredTasks(sortedTasks);
//     }
//   };
//   return (
//     <>
//       <h1>Task Management</h1>
//       <Select
//         options={options}
//         value={selectedOption}
//         onChange={handleOptionChange}
//         placeholder="Select Option..."
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Status</th>
//             <th>Priority</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredTasks.map((task) => (
//             <tr key={task.id}>
//               <td>{task.id}</td>
//               <td>{task.title}</td>
//               <td>{task.status}</td>
//               <td>{task.priority}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import Select from "react-select";

// const data = [
//   {
//     status: ["ToDo", "Doing", "Reviews"],
//     priority: ["Low", "Medium", "High"],
//     tasks: [
//       {
//         id: "1",
//         title: "Add Tea To Code in string data type",
//         status: "ToDo",
//         priority: "Medium",
//       },
//       {
//         id: "2",
//         title: "white Addintion 10 numbers",
//         status: "Doing",
//         priority: "Low",
//       },
//       {
//         id: "3",
//         title: "Write Comment Syntax for react js",
//         status: "Reviews",
//         priority: "High",
//       },
//       {
//         id: "4",
//         title: "Write Datatypes in javaScript",
//         status: "ToDo",
//         priority: "Low",
//       },
//       {
//         id: "5",
//         title: "Write A list of events in HTML",
//         status: "Doing",
//         priority: "Medium",
//       },
//       {
//         id: "6",
//         title: "What is Synchronous and Asynchronous",
//         status: "Doing",
//         priority: "High",
//       },
//       {
//         id: "7",
//         title: "What Are Hooks in React Js",
//         status: "Reviews",
//         priority: "Low",
//       },
//       {
//         id: "8",
//         title: "Explain Routing in React Js",
//         status: "Doing",
//         priority: "Medium",
//       },
//       {
//         id: "9",
//         title: "Explain Class-based Components and Function-based Components",
//         status: "ToDo",
//         priority: "Low",
//       },
//       {
//         id: "10",
//         title: "What is SDLC?",
//         status: "Reviews",
//         priority: "High",
//       },
//     ],
//   },
// ];

// const options = [
//   { value: "status", label: "Status" },
//   { value: "priority", label: "Priority" },
// ];

// const App = () => {
//   const [selectedOption, setSelectedOption] = useState(options[0]);
//   const [filteredTasks, setFilteredTasks] = useState(data[0].tasks);
//   console.log(selectedOption);

//   const handleOptionChange = (selected) => {
//     setSelectedOption(selected);

//     if (selected.value === "status") {
//       const tasksByStatus = {};
//       data[0].status.forEach((status) => {
//         tasksByStatus[status] = data[0].tasks.filter(
//           (task) => task.status === status
//         );
//       });
//       setFilteredTasks(tasksByStatus);
//     } else if (selected.value === "priority") {
//       const sortedTasks = [...data[0].tasks].sort((a, b) =>
//         a.priority.localeCompare(b.priority)
//       );
//       setFilteredTasks(sortedTasks);
//     }
//   };

//   return (
//     <>
//       <h1>Task Management</h1>
//       <Select
//         options={options}
//         value={selectedOption}
//         onChange={handleOptionChange}
//         placeholder="Select Option..."
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Status</th>
//             <th>Priority</th>
//           </tr>
//         </thead>

//         <tbody>
//           {Object.keys(filteredTasks).map((stat) => {
//             console.log(stat);
//             return (
//               <>
//                 <tr key={stat}>
//                   <th colSpan="4">{stat}</th>
//                 </tr>
//                 {/* {filteredTasks[stat].map((task) => (
//                   <tr key={task.id}>
//                     <td>{task.id}</td>
//                     <td>{task.title}</td>
//                     <td>{task.status}</td>
//                     <td>{task.priority}</td>
//                   </tr>
//                 ))} */}
//               </>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Select from "react-select";

const data = [
  {
    status: ["ToDo", "Doing", "Reviews"],
    priority: ["Low", "Medium", "High"],
    tasks: [
      {
        id: "T-1",
        title: "Add Tea To Code in string data type",
        status: "ToDo",
        priority: "Medium",
        emoji: "😊😊",
      },
      {
        id: "T-2",
        title: "white Addintion 10 numbers",
        status: "Doing",
        priority: "Low",
        emoji: "🤗🤗",
      },
      {
        id: "T-3",
        title: "Write Comment Syntax for react js",
        status: "Reviews",
        priority: "High",
        emoji: "🤩🤩",
      },
      {
        id: "T-4",
        title: "Write Datatypes in javaScript",
        status: "ToDo",
        priority: "Low",
        emoji: "😊😊",
      },
      {
        id: "T-5",
        title: "Write A list of events in HTML",
        status: "Doing",
        priority: "Medium",
        emoji: "🤗🤗",
      },
      {
        id: "T-6",
        title: "What is Synchronous and Asynchronous",
        status: "Doing",
        priority: "High",
        emoji: "🤗🤗",
      },
      {
        id: "T-7",
        title: "What Are Hooks in React Js",
        status: "Reviews",
        priority: "Low",
        emoji: "🤩🤩",
      },
      {
        id: "T-8",
        title: "Explain Routing in React Js",
        status: "ToDo",
        priority: "Medium",
        emoji: "😊😊",
      },
      {
        id: "T-9",
        title: "Explain Class-based Components and Function-based Components",
        status: "ToDo",
        priority: "Low",
        emoji: "😊😊",
      },
      {
        id: "T-10",
        title: "What is SDLC?",
        status: "Reviews",
        priority: "High",
        emoji: "🤩🤩",
      },
      {
        id: "T-11",
        title: "State Class And Function Based Component In React js ?",
        status: "Doing",
        priority: "High",
        emoji: "🤩🤩",
      },
    ],
  },
];

const options = [
  { value: "priority", label: "Priority" },
  { value: "status", label: "Status" },
];

const Data = () => {
  const [selectedOption, setSelectedOption] = useState(options[1]);
  console.log(selectedOption);
  const [filteredTasks, setFilteredTasks] = useState(data[0].tasks);
  console.log(filteredTasks);

  // for default value useeffect is use @s
  useEffect(() => {
    const tasksByStatus = {};
    data[0].status.forEach((status) => {
      tasksByStatus[status] = data[0].tasks.filter(
        (task) => task.status === status
      );
    });
    setFilteredTasks(tasksByStatus);
  }, []);
  // for default value useeffect is use @e

  const handleOptionChange = (selected) => {
    setSelectedOption(selected);

    if (selected.value === "status") {
      const tasksByStatus = {};
      data[0].status.forEach((status) => {
        tasksByStatus[status] = data[0].tasks.filter(
          (task) => task.status === status
        );
      });
      setFilteredTasks(tasksByStatus);
      console.log(tasksByStatus);
    } else if (selected.value === "priority") {
      // const sortedTasks = [...data[0].tasks].sort((a, b) =>
      //   a.priority.localeCompare(b.priority)
      // );
      // setFilteredTasks(sortedTasks);
      // console.log(sortedTasks);
      const tasksByPriority = {};
      data[0].priority.forEach((priority) => {
        tasksByPriority[priority] = data[0].tasks.filter(
          (task) => task.priority === priority
        );
      });
      setFilteredTasks(tasksByPriority);
      console.log(tasksByPriority);
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    const sourceKey = result.source.droppableId;
    const destinationKey = result.destination.droppableId;

    if (sourceKey === destinationKey) {
      const updatedTasks = [...filteredTasks[sourceKey]];
      const [movedTask] = updatedTasks.splice(sourceIndex, 1);
      updatedTasks.splice(destinationIndex, 0, movedTask);

      setFilteredTasks({
        ...filteredTasks,
        [sourceKey]: updatedTasks,
      });
    } else {
      const sourceTasks = [...filteredTasks[sourceKey]];
      const destinationTasks = [...filteredTasks[destinationKey]];

      const [movedTask] = sourceTasks.splice(sourceIndex, 1);
      destinationTasks.splice(destinationIndex, 0, movedTask);

      setFilteredTasks({
        ...filteredTasks,
        [sourceKey]: sourceTasks,
        [destinationKey]: destinationTasks,
      });
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center ">
        <div className="row">
          <div className="col-lg-12 col-lg-6">
            <div className="d-flex justify-content-between">
              <h3>Task Management</h3>
              <div className="py-3" style={{ width: "20rem" }}>
                <Select
                  options={options}
                  value={selectedOption}
                  onChange={handleOptionChange}
                />
              </div>
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
              <div className="col-lg-12 d-flex justify-content-center p-4">
                {Object.keys(filteredTasks).map((key) => (
                  <Droppable droppableId={key} key={key}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className=" col-lg-4 m-1 border border-black p-3 rounded bg-primary-dim"
                      >
                        <h6 className=" d-flex justify-content-center  ">
                          <span className="text-dark fs-3 fw-bold bg-success p-1 rounded ">
                            {key}
                          </span>
                        </h6>
                        {Array.isArray(filteredTasks[key]) &&
                          filteredTasks[key].map((task, index) => (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  key={task.id}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="border border-2 p-1 card text-dark bg-light"
                                  style={{ height: "16rem", width: "20rem" }}
                                >
                                  <div class="card-header border-bottom bg-warning-dim">
                                    <p className="text-secondary text-center fw-bold ">
                                      <span className="text-danger fw-bold">
                                        Task:
                                      </span>
                                      {task.title}
                                    </p>
                                  </div>
                                  <div className=" text-center">
                                    <p className="text-primary text-center fw-bold  ">
                                      <span className="text-danger fw-bold">
                                        {" "}
                                        Id:{" "}
                                      </span>
                                      {task.id}
                                    </p>
                                    <p className="text-primary text-center fw-bold  ">
                                      <span className="text-danger fw-bold">
                                        Status:
                                      </span>
                                      {task.status}
                                    </p>
                                    <p className="text-primary text-center fw-bold  ">
                                      <span className="text-danger fw-bold">
                                        Priority:
                                      </span>
                                      {task.priority}
                                    </p>
                                    <p className="text-primary text-center fw-bold fs-2  ">
                                      {task.emoji}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                      </div>
                    )}
                  </Droppable>
                ))}
              </div>
            </DragDropContext>
          </div>
        </div>
      </div>
    </>
  );
};
export default Data;
{
  /* <tr key={status}>
   <th colSpan="4">{status}</th>
  </tr> */
}
