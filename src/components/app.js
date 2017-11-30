import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
import APIManager from '../utils/APIManager.js';

// const todos = [] ;
// {
//     task: 'make React tutorial',
//     isCompleted: false
// },
// {
//     task: 'eat dinner',
//     isCompleted: true
// }
// ];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
    }

    render() {
        return (
            <div>
                <h1>React ToDos App</h1>
                <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        );
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    createTask(task) {
        var url = "/api/toDos";
        
        let newItem = [{
            task,
            isCompleted: false
        }];

        APIManager.post(url, newItem, (err, responce) => {
            if(err){
                alert(err);
                return
            }

            this.state.todos.push(responce.result[0]);

            this.setState({ todos: this.state.todos });

        })
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }

    componentDidMount(){
        var url = "/api/toDos";

        APIManager.get(url, null, (err, responce) => {
            if(err){
                alert('Error: '+err.message);
                return
            }
            console.log("response: ", responce.result);
            this.setState({
                todos: responce.result
            });
            console.log("State: ",this.state.todos)
        });
    }
}
