var store = Redux.createStore(combine)

function render() {
    var state = store.getState();
    document.getElementById('value').innerHTML = state.sumState;
    document.getElementById('value2').innerHTML = state.differenceState;
    document.getElementById('value3').innerHTML = state.iState;
    document.getElementById('value4').innerHTML = state.eState;
};

store.subscribe(render);
render();
