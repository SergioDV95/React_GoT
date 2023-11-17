const useCalculator = (operation) => {
  // eslint-disable-next-line no-eval
  let result = eval(operation);
  return result;
};

export default useCalculator;