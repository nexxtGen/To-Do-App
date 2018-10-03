import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{text: 'Symulacja taska', id: '1234isHardPassword'}, {text: 'Symulacja taska 2', id: '0234isHardPassword'}]
        }; // #średniklivesmatter
    }

    //funkcje
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

    render() {
        return (
            <div className={style.TodoApp}>
                <Title data={this.state.data}/>
            </div>
        )
    }
}

export default App;