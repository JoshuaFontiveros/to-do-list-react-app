import React from 'react';
import './Todo.css';
import check from '../images/check.png';
import remove from '../images/remove.png';

const Todo = (props) => {

    function onTriggerDeleteTask() {
        props.deleteTask(props.name);
    }

    function onTriggerMarkAsDone() {
        props.markTaskAsDone(props.name);
    }

    return (
        <div className="d-flex justify-content-between bg-color-to-do-list margin-top-todo to-do-list-container"> 
            <p className ="d-flex align-items-center margin-left-top">{props.name}</p>
            <span>
                {
                    props.status === "pending" 
                    ?
                    <button className="btn btn-success" onClick={onTriggerMarkAsDone}><img classNane="check" src={check} alt="Check Logo" height="30"/></button> 
                    : 
                    <span>This is done</span>
                }
                    <button className="btn btn-danger btn-delete" onClick={onTriggerDeleteTask}><img className="delete" src={remove} alt="Delete logo" height="30"/></button>
            </span>
        </div>
    )
}
    
export default Todo;

// Class based component
/* class Todo extends React.Component{
    constructor(props){
        super(props);
        this.onTriggerDeleteTask = this.onTriggerDeleteTask.bind(this);
        this.onTriggerMarkAsDone = this.onTriggerMarkAsDone.bind(this);
    }

    // Studying: Calling parent method to child component
    //  1. Make a constructor and method, bind that method. Inside that method, call this.props.variableName assigned to parent method
    //  This is advisable if you want to add more logic to your method
    onTriggerDeleteTask(){
        this.props.deleteTask(this.props.name);

    }

    onTriggerMarkAsDone(){
        this.props.markTaskAsDone(this.props.name);
    }

    //  Or Use an arrow function if the logic you want to pass is already satisfied, then you want to direct call the method using props

    render() { 
        return (
            <div className="d-flex justify-content-between bg-color-to-do-list margin-top-todo to-do-list-container"> 
                <p className ="d-flex align-items-center margin-left-top">{this.props.name}</p>
                <span>
                    {
                        this.props.status === "pending" 
                        ?
                        <button className="btn btn-success" onClick={ () => this.props.markTaskAsDone(this.props.name) }><img src={check} alt="Check Logo" height="30"/></button> 
                        : 
                        <span>This task is done</span>
                    }
                        <button className="btn btn-danger btn-delete" onClick={ () => this.props.deleteTask(this.props.name) }><img src={remove} alt="Delete logo" height="30"/></button>
                </span>
            </div>
        );
    }
} */


/* How can we use Axios and This.state on functional component?
    We have HOOKS in functional component */
// Functional based component

