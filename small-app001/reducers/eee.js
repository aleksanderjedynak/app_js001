function eF(currentState, action){
  var DEFAULT_STATE = 5;
  if (currentState === undefined) {
      nextState = DEFAULT_STATE;
      return nextState;
  }
  switch (action.type) {
    case 'E':
      nextState = parseInt(action.a) / parseInt(action.b);
      return nextState;
    default:
      nextState = currentState;
      return nextState;
  }

}
