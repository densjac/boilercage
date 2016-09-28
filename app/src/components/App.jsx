import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router'
import RadioOption from './Utilities.jsx';

import Button from './Click.jsx'
// import { IndexRoute } from 'react-router'

// Defining a component with initial state that would be set in the constructor with this.state = { name : value}
// class MyComponent extends React.Component {
//   constructor() {
//     super();
 
//     this.state = { test: 1 };
//   }
 
//   render() {
//     render (<div>Hello World!</div>);
//   }
// }

class App extends React.Component{
  render() {
    return (
      //console.log(this.props.children)
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About Chile</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class About extends React.Component{
    render() {
    return (
      <div>
            <h3>Some info</h3>
            <p> Lorem ipsum dolor sit cuchuflí barquillo bacán jote gamba listeilor po cahuín, luca melón con vino pichanga coscacho ni ahí peinar la muñeca chuchada al chancho achoclonar. Chorrocientos pituto ubicatex huevo duro bolsero cachureo el hoyo del queque en cana huevón el año del loly hacerla corta impeque de miedo quilterry la raja longi ñecla. Hilo curado rayuela carrete quina guagua lorea piola ni ahí</p>
      </div>      
            )
  }
}

class Inbox extends React.Component{
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

class Message extends React.Component{
  render() {
    return <h3>The params is: {this.props.params.id}</h3>
  }
}

class Dashboard extends React.Component{
  // InitialState() {
  //   console.log("testing getInitialState")
  //   return {
  //     tacos: [
  //       { name: 'duck confit' },
  //       { name: 'carne asada' },
  //       { name: 'shrimp' }
  //     ]
  //   }
  // }
  render() {
    return (
    <div>
    <p>This is your Dashboard!!</p>
    <Button /> 
    </div>
    )
  } 
}


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* Show the dashboard at / */}
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.body)
