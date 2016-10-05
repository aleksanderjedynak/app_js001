function iF(currentState, action){
  var DEFAULT_STATE =4;
  if (currentState === undefined) {
      nextState = DEFAULT_STATE;
      return nextState;
  }
  switch (action.type) {
    case 'I':
      nextState = parseInt(action.a) * parseInt(action.b);
      return nextState;
    default:
      nextState = currentState;
      return nextState;
  }

}
