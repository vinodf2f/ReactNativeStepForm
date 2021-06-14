export const mockSubmit = data => {
  return new Promise(resolve => setTimeout(() => resolve(data), 1000));
};
