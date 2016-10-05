function differenceF(currentState, action){
    var DEFAULT_STATE = 0;
    if (currentState === undefined) {
        nextState = DEFAULT_STATE;
        return nextState;
    }
    switch (action.type) {
      case 'DIFFERENCE':
        nextState = parseInt(action.a) - parseInt(action.b);
        return nextState;
      default:
        nextState = currentState;
        return nextState;
    }
}
