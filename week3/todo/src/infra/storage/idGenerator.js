export function IdGenerator(offset) {
  let id = offset || 0;
  function execute() {
    return ++id;
  }
  return {
    execute,
  };
}
