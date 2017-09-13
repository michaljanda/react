import { createStore } from 'redux'
import React from 'react'; //je potřeba aby fungovala 'jsx' syntaxe
import ReactDOM from 'react-dom'; //vstupní bod pro renderování reactu

import reducers from './reducers';

let store = createStore(reducers);

store.subscribe(function () {
     let state = store.getState();
     console.log('Nový stav',state);
     document.body.innerHTML = 'Aktuální stav: <br />-' + state.join('<br />-');
});

store.dispatch({type: 'ADD', text: 'Třetí úkol'});
store.dispatch({type: 'ADD', text: 'Čtvrtý úkol'});

ReactDOM.render(<div>Ahoj</div>, document.getElementById("root"));

