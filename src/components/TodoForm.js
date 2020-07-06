import React from 'react'

class ToDoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            input: ''
        };
    }

    handleInputChange = e => {
        this.setState({
            input: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addToDo(this.state.input);
        console.log(this.props.addToDo)
        this.setState({
            input: ''
        });
    };

    render() {
        return (
            <form style={{display: 'flex', flexDirection:'column', width: '20%'}} onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='item'
                    value={this.state.input}
                    onChange={this.handleInputChange}
                    />
                    <button style={{width:'5rem', margin: '1%'}}>Submit</button>
            </form>
        )
    }
}

export default ToDoForm