import React, { Component } from 'react';


/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['Sacar la ropa','Hacer la cama','Leer un rato'],
      task: ""
    }
    this.change=this.change.bind(this);
    this.add=this.add.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.list.map((task) =>
              <li key={task}>{task}</li>
            )}
          </ul>
           <form>
             <input type="text" id="new-task" onChange={this.change} onKeyPress={this.add} value={this.state.task} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
  change(event){
    this.setState({
      task:event.target.value
    })
  }

  add(event){
    if(event.key === "Enter"){
      this.setState({
        list: this.state.list.concat(this.state.task),
        task: ""
      })
    }
  }
}


export default App;
