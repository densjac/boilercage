import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'


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
        {this.props.children || "Welcome to this component"}
      </div>
    )
  }
}

class Message extends React.Component{
  render() {
    return <h3>The params is: {this.props.params.id}</h3>
  }
}


import { IndexRoute } from 'react-router'

class Dashboard extends React.Component{
  render() {
    return <div>This is your Dashboard!!</div>
  } 
}

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Dashboard },
  childRoutes: [
    { path: 'about', component: About },
    {
      path: 'inbox',
      component: Inbox,
      childRoutes: [{
        path: 'messages/:id',
        onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
      }]
    },
    {
      component: Inbox,
      childRoutes: [{
        path: 'messages/:id', component: Message
      }]
    }
  ]
}

render(<Router routes={routes} />, document.body)
