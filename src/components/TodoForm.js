import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueForm: ''
        };        
    }

    submit(event) {
        this.props.addItemFunc(this.state.valueForm);
        event.preventDefault(); //Zatrzymuje przeładowanie App
    }

    onChangeForm(event) {
        const val = event.currentTarget.value; 
        this.setState({ valueForm: val });
    }

    render() {
        return (
            <div className={style.form}>
                <form onSubmit={this.submit.bind(this)}>
                    <label>
                        <p>Add new Item:</p>
                        <input type="text" value={this.state.value} onChange={this.onChangeForm.bind(this)}></input>
                    </label>
                    <input type="submit" value="Add Task"></input>
                </form>
            </div>
        )
    }
};
/* // Komponent funkcyjny który trochę źle działa . // Źle działa bo chyba nie ma w addTodo event.preventdefault()  
const TodoForm = props => (
    <div>
        <form onSubmit={() => props.addTodo(props.value)}>
            <label>
                <p>Add new Item:</p>
                <input type="text" value={props.value} onChange={props.onChange}></input>
            </label>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
)
*/
export default TodoForm;