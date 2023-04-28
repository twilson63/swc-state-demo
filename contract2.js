export async function handle(state, action) {
  const _state = typeof state === 'string' ? JSON.parse(state) : Object.assign({}, state)

  if (action.input.function === 'log') {
    _state.entries[SmartWeave.transaction.id] = {
      caller: action.caller,
      input: action.input,
    };
    return { state: _state };
  }
}
