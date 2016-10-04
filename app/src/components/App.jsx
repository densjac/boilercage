import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import '../../semantic/dist/semantic.css';

import RadioOption from './Utilities.jsx';
import Button from './Button.jsx';

export default class App extends React.Component{
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <ul>
          <li><Link to="/component1">Component 1</Link></li>
          <li><Link to="/component2">Component 2</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}

export class Component1 extends React.Component{
    render() {
    return (
      <div>
            <h2>Component 1</h2>
            <p>Lorem ipsum dolor sit cuchuflí barquillo bacán jote gamba listeilor po cahuín, luca melón con vino pichanga coscacho ni ahí peinar la muñeca chuchada al chancho achoclonar. Chorrocientos pituto ubicatex huevo duro bolsero cachureo el hoyo del queque en cana huevón el año del loly hacerla corta impeque de miedo quilterry la raja longi ñecla. Hilo curado rayuela carrete quina guagua lorea piola ni ahí</p>
      </div>
            )
  }
}

export class Component2 extends React.Component{
  render() {
    return (
      <div>
          <h2>Component 2</h2>

          <p>Welcome to this second component. This component has a child.</p>
          <Link to="/component2/subcomponent/foo">Subcomponent: foo</Link>
          {this.props.children}
      </div>
    )
  }
}

export class Subcomponent extends React.Component{
  render() {
    return <h3>The params is: {this.props.params.id}</h3>
  }
}

export class Content extends React.Component{
  render() {
    return (
    <div>
    <p>Default Content</p>
    <Button/>
    </div>
    )
  }
}
