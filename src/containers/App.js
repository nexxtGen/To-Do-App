import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoFilter from '../components/TodoFilter';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                    id: 1,
                    text: 'clean room'
                }, {
                    id: 2,
                    text: 'wash the dishes'
                }, {
                    id: 3,
                    text: 'feed yourself'
                }
                
            ],
            filter: ''
        }; // #średniklivesmatter        
    }

    //funkcje/metody
    addTodo(val) { //metoda dodaje nowe elementy do kolekcji
        const todo = {
            text: val,
            id: uuid.v4(), // biblioteka uuid (npm install --save uuid) // Dlaczego dali tu przecinek?            
        }; // #średniklivesmatter
        const data = [...this.state.data, todo];
        this.setState({data}); // TO to samo co {data: data}
    }

    //Usuwanie rzeczy do zrobienia
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);

        this.setState({data: remainder});
    }
    // Filtrowanie listy
    onFilterChange(event) {
        const value = event.currentTarget.value;

        this.setState({ filter: value });
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title data={this.state.data}/>
                <TodoFilter filter={this.state.filter} onFilterChange={this.onFilterChange.bind(this)}/>
                <TodoList data={this.state.data} remove={this.removeTodo.bind(this)} filter={this.state.filter}/>
            </div>
        )
    }
}

export default hot(module)(App);