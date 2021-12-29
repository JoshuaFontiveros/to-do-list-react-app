import React from 'react';
import './Todo.css';
import check from '../images/check.png';
import remove from '../images/remove.png';
import { Container, Button, Row, Col } from 'react-bootstrap';

const PendingTasks = props => {
  function onTriggerDeleteTask() {
    props.deleteTask(props.toDoList.name);
  }

  function onTriggerMarkAsDone() {
    props.markTaskAsDone(props.toDoList.name);
  }

  return (
    <Container>
      <Row>
        <Col className='d-flex'>
          <strong>{props.toDoList.name}</strong>
        </Col>
      </Row>
      <span>
        {props.toDoList.status === 'pending' ? (
          <>
            <Button variant='success' onClick={onTriggerMarkAsDone}>
              Mark Task As Done
            </Button>
          </>
        ) : (
          <span>This is done</span>
        )}
        <Button variant='danger' className='' onClick={onTriggerDeleteTask}>
          Delete Task
        </Button>
      </span>
    </Container>
  );
};

export default PendingTasks;
