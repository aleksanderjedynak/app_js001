function combine(currentState, action) {
    var nextState = Object.assign({},currentState);

    nextState = {
        sumState: sumF(nextState.sumState, action),
        differenceState: differenceF(nextState.differenceState, action),
        iState: iF(nextState.iState, action),
        eState: eF(nextState.eState, action),
    }
    return nextState;
}
