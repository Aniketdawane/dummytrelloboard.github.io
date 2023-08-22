
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

const initialColumns = {
  requested: {
    name: "Requested",
    items: [
      {
        id: uuidv4(),
        title: "white Addintion 10 numbers",
        status: "Doing",
        priority: "Low",
      },
      {
        id: uuidv4(),
        title: "Write Comment Syntax for react js",
        status: "Reviews",
        priority: "High",
      },
      {
        id: uuidv4(),
        title: "Write Datatypes in javaScript ",
        status: "ToDo",
        priority: "Low",
      },
      {
        id: uuidv4(),
        title: "Write Datatypes in javaScript ",
        status: "ToDo",
        priority: "High",
      },
    ],
  },
  todo: {
    name: "To do",
    items: [],
  },
  doing: {
    name: "Doing",
    items: [],
  },
  reviews: {
    name: "Reviews",
    items: [],
  },
};

const Dragmain = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const { control } = useForm();

  const options = [
    { value: "Priority", label: "Priority" },
    { value: "Status", label: "Status" },
  ];

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

      setColumns((prevState) => ({
        ...prevState,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      }));
    } else {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns((prevState) => ({
        ...prevState,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      }));
    }
  };
  useEffect(() => {
    if (selectedStatus) {
      const filteredColumns = { ...initialColumns };
      Object.keys(filteredColumns).forEach((columnKey) => {
        filteredColumns[columnKey].items = initialColumns[
          columnKey
        ].items.filter((item) => item.status === selectedStatus);
      });
      setColumns(filteredColumns);
    } else {
      setColumns(initialColumns);
    }
  }, [selectedStatus]);

  const handleStatusChange = (selected) => {
    setSelectedStatus(selected ? selected.value : null);
  };

  return (
    <>
      <div className="col-lg-4">
        <div className="form-group">
          <div className="form-control-wrap">
            <label className="form-label" htmlFor="full-name">
              Select Status
            </label>
            <div>
              <Controller
                name="BlogStatus"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    isClearable
                    {...field}
                    options={options.filter(
                      (option) => option.value === "Status"||option.value === "Priority"
                    )} 
                    onChange={handleStatusChange}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-lg-6">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <DragDropContext onDragEnd={onDragEnd}>
            {Object.entries(columns).map(([columnId, column]) => (
              <div key={columnId} className="text-center">
                <h6>{column.name}</h6>
                <div className="m-1">
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 10,
                          width: 250,
                          minHeight: 300,
                          maxHeight: "auto",
                        }}
                      >
                        {column.items.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  userSelect: "none",
                                  padding: 16,
                                  margin: "0 0 8px 0",
                                  minHeight: "50px",
                                  backgroundColor: snapshot.isDragging
                                    ? "#263B4A"
                                    : "#456C86",
                                  color: "white",
                                  ...provided.draggableProps.style,
                                }}
                                className="text-danger"
                              >
                                <h6>Title: {item.title}</h6>
                                <h6>Status: {item.status}</h6>
                                <h6>Priority: {item.priority}</h6>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              </div>
            ))}
          </DragDropContext>
        </div>
      </div>
    </>
  );
};

export default Dragmain;
