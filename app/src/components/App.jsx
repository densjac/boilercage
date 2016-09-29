import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
// import '../../semantic/dist/semantic.css';

import RadioOption from './Utilities.jsx';
import Click from './Click.jsx';

const Hello = ({ name }) =>  <h1 > Hello {name} </h1> // Stateless/Pure component

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {count : this.props.count ? this.props.count : 0}
  }
  onClick(event){
    this.setState({
      count : parseInt(this.state.count) + 1
    });
  }
  render(){
    return (
      <div onClick={this.onClick.bind(this)}>
        Count (Click to increment): {this.state.count}
      </div>
    )
  }

}


export default class App extends React.Component{
  render() {
    // return (
    //   <div>
    //     <h1>App</h1>
    //     <ul>
    //       <li><Link to="/about">About Chile</Link></li>
    //       <li><Link to="/inbox">Inbox</Link></li>
    //     </ul>
    //     { this.props.children }
    //   </div>
    // );
    return (
              <div>
                  <Counter count="0" />
                  <Hello name={'Dennis'} />
              </div>
            );
  }
}

export class About extends React.Component{
    render() {
    return (
      <div>
            <h3>Some info</h3>
            <p> Lorem ipsum dolor sit cuchuflí barquillo bacán jote gamba listeilor po cahuín, luca melón con vino pichanga coscacho ni ahí peinar la muñeca chuchada al chancho achoclonar. Chorrocientos pituto ubicatex huevo duro bolsero cachureo el hoyo del queque en cana huevón el año del loly hacerla corta impeque de miedo quilterry la raja longi ñecla. Hilo curado rayuela carrete quina guagua lorea piola ni ahí</p>
      </div>
            )
  }
}

export class Inbox extends React.Component{
  render() {
    return (
      <div>
        <h2>Inbox</h2>

        Welcome to this component
        <Link to="inbox/messages/15">message 15</Link>
        {this.props.children}

      </div>
    )
  }
}

export class Message extends React.Component{
  render() {
    return <h3>The params is: {this.props.params.id}</h3>
  }
}

export class Dashboard extends React.Component{
  render() {
    return (
    <div>
    <p>This is your Dashboard!!</p>
    <Click/>
    </div>
    )
  }
}
