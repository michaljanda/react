let initialState = ["První úkol", "Druhý úkol"]; //tohle je úvodní stav reduceru, dáme do něj dva úkoly

const todos = (state = initialState, action) => { //toto je reducer

    switch (action.type) {
        case 'ADD':  //zpracování první akce
            return [...state, action.text];

        case 'REMOVE':  //zpracování druhé akce
            let newState = [...state];
            newState.splice(action.id, 1);
            return newState;

        default:
            return state
    }
};

export default todos;
