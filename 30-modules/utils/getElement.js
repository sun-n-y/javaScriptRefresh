const getElement = (name) => {
  const element = document.querySelector(name);
  if (!element) {
    throw Error(`Element: ${name}, does not exist`);
  }
  return element;
};

export default getElement;
