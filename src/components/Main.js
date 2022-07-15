import React, { Component } from 'react';
import './Main.css';
import Form from './Form';
import Tasks from './Tasks';

export default class Main extends Component{
  state ={
    newTask: ' ',
    tasks: [],
    index: -1,
  };

  componentDidMount(){
    const tasks = JSON.parse(localStorage.getItem('Tasks:'));

    if (!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState){
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem('Tasks:', JSON.stringify(tasks));
  }

  changeSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newtasks = [...tasks];

    if (index === -1){
      this.setState({
        tasks: [...newtasks, newTask],
        newTask: ' ',
      });
    } else {
      newtasks[index] = newTask;

      this.setState({
        tasks: [...newtasks],
        index: -1,
      });
    }
  };

  changeInput= (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  editTask= (e, index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTask: tasks[index],
    });
  };

  deleteTask= (e, index) => {
    const { tasks } = this.state;
    const newtasks = [...tasks];
    newtasks.splice(index, 1);

    this.setState({
      tasks: [...newtasks],
    });
  };

  render(){
    const { newTask, tasks } = this.state;

    return (
      <div className="Main">
        <h1>Task List 👺</h1>

        <Form
          changeInput={this.changeInput}
          changeSubmit={this.changeSubmit}
          newTask={newTask}
        />
        <Tasks
          tasks={tasks}
          editTask={this.editTask}
          deleteTask={this.deleteTask}
        />

      </div>
    );
  }
}
