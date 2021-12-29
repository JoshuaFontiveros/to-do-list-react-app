import React from 'react';
import './Todo.css';
import check from '../images/check.png';
import remove from '../images/remove.png';
import { Button } from 'react-bootstrap';

const DoneTasks = props => {
  function onTriggerDeleteTask() {
    props.deleteTask(props.toDoList.name);
  }
  function onTriggerMarkAsDone() {
    props.markTaskAsDone(props.toDoList.name);
  }

  //   let isNotEmpty = true;
  //   let isEmpty = false;

  return (
    <div className=''>
      <p>{props.toDoList.name}</p>
      <span>
        {props.toDoList.status === 'done' ? (
          <>
            <Button variant='danger' onClick={onTriggerDeleteTask}>
              Delete Task
            </Button>
            {/* <button className='btn btn-success' onClick={onTriggerMarkAsDone}>
              <img classNane='check' src={check} alt='Check Logo' height='30' />
            </button> */}
          </>
        ) : (
          <span>{props.toDoList.name}</span>
        )}
      </span>
    </div>
  );
};

export default DoneTasks;
