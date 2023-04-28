export async function handle(state, action) {
  if (action.input.function === 'log') {
    state.entries[SmartWeave.transaction.id] = {
      caller: action.caller,
      input: action.input,
    };
    return { state };
  }
}
