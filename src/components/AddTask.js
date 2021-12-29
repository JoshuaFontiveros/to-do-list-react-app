import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './AddTask.css';
const AddTask = props => {
  const [taskName, setTask] = useState('');
  // const [id, setId] = useState(0);

  function formSubmitHandler(e) {
    e.preventDefault(); // prevent the page from reloading
    props.addTask(taskName);
    setTask('');
  }

  function triggerSetTask(e) {
    setTask(e.target.value);
  }

  return (
    <Container fluid='sm' className='add-task-container'>
      <Form onSubmit={formSubmitHandler}>
        <Form.Group className='mb-3'>
          <Form.Label>
            <strong>Add New Task</strong>
          </Form.Label>
          <Form.Control
            type='text'
            placeholder='What do you need to do later?'
            onChange={triggerSetTask}
            value={taskName}
            required
          />
          <Form.Text className='text-muted'>
            Add any tasks you want! It's easy with our to-do-list app!
          </Form.Text>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Save Task
        </Button>
      </Form>
    </Container>
  );
};

export default AddTask;
