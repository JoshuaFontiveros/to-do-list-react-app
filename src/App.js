import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import AddTask from "./components/AddTask";
import PendingTasks from "./components/PendingTasks";
import DoneTasks from "./components/DoneTasks";
import "./App.css";

const App = (props) => {
  const toDoList = useSelector((state) => state.todos);
  const pendingTaskCount = useSelector((state) => state.pendingCounter);
  const doneTaskCount = useSelector((state) => state.doneCounter);
  const dispatch = useDispatch();

  let allTask = toDoList.length;

  function addTask(name) {
    if (toDoList.findIndex((todo) => todo.name.toLowerCase() === name.toLowerCase()) >= 0) {
      alert("Task already exists");
    } else {
      let newTask = { name: name, status: "pending" };
      dispatch({ type: "ADD_TASK", payload: newTask });
      alert(`You have added ${name}`);
    }
  }

  function deleteTask(name) {
    let updatedToDoList = toDoList.filter((data) => name !== data.name);
    dispatch({ type: "DELETE_TASK", payload: updatedToDoList });
  }

  function markTaskAsDone(name) {
    let markedToDoList = toDoList.map((task) => {
      if (name === task.name) {
        task.status = "done";
      }
      return task;
    });
    // setTodos(toDoList);
    dispatch({ type: "MARK_TASK_DONE", payload: markedToDoList });
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className="d-flex align-items-center">
          <Navbar.Brand>
            To-Do List <Badge bg="secondary">{allTask}</Badge>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="nav-data" to="/AddTask">
                  Add Task
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-data" to="/PendingTasks">
                  Pending Tasks
                  <Badge pill bg="danger"></Badge>{" "}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-data" to="/DoneTasks">
                  Done Tasks
                  <Badge pill bg="success"></Badge>
                  {""}
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid="sm" className="output-container ">
        <Routes>
          <Route
            path="/AddTask"
            element={<AddTask addTask={addTask} todos={toDoList} name={toDoList.name} />}
          />

          <Route
            path="/PendingTasks"
            element={
              toDoList.filter((todo) => todo.status === "pending").length > 0 ? (
                toDoList.map((todo) => {
                  if (todo.status === "pending") {
                    return (
                      <PendingTasks
                        toDoList={todo}
                        toDoStatus={todo.status}
                        deleteTask={deleteTask}
                        markTaskAsDone={markTaskAsDone}
                      />
                    );
                  }
                })
              ) : (
                <Container fluid="sm" className="pending-task-done-container">
                  <strong>Well Done!</strong>
                  <h6 bg="secondary">Your pending tasks is empty. Time to recharge.</h6>
                  <img
                    src="https://cdn.dribbble.com/users/559871/screenshots/2526996/media/7337a64e84074e548a037dc83c9dcab3.gif"
                    alt="funny GIF"
                  />
                </Container>
              )
            }
          />
          <Route
            path="/DoneTasks"
            element={
              toDoList.filter((todo) => todo.status === "done").length > 0 ? (
                toDoList.map((todo) => {
                  if (todo.status === "done") {
                    return (
                      <DoneTasks
                        toDoList={todo}
                        toDoStatus={todo.status}
                        deleteTask={deleteTask}
                        markTaskAsDone={markTaskAsDone}
                      />
                    );
                  }
                })
              ) : (
                <Container fluid="sm" className="pending-task-done-container">
                  <strong>Well Done!</strong>
                  <h6 bg="secondary">Your to-do list is empty. Time to recharge.</h6>
                  <img
                    src="https://cdn.dribbble.com/users/559871/screenshots/2526996/media/7337a64e84074e548a037dc83c9dcab3.gif"
                    alt="funny GIF"
                  />
                </Container>
              )
            }
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
