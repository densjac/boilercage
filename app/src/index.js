import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from "react-dom";
//import RouterContainer from './components/RouterContainer.jsx';
import App from './components/App.jsx'

main();
function main() {
    const app = document.createElement('div');
    document.body.appendChild(app);

    ReactDOM.render(
      <AppContainer><App /></AppContainer>, app
    )

    if (module.hot) {
        module.hot.accept('./components/App.jsx', () => {
            ReactDOM.render(
                <AppContainer component={require('./components/App.jsx').default} />,
                app
            );
        });
    }
}


// CHECK : https://thesabbir.com/hot-reloading-react-stateless-components/

//
// import { AppContainer } from 'react-hot-loader'; // required
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'; // App
//
// const mountApp = document.getElementById('root');
//
// ReactDOM.render(
//     <AppContainer component={App} />,
//     mountApp
// );
//
// if (module.hot) {
//     module.hot.accept('./App', () => {
//         ReactDOM.render(
//             <AppContainer component={require('./App').default} />,
//             mountApp
//         );
//     });
// }
