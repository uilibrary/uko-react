const uniqueId = () => {
  const getChar = () => Math.random().toString(16).slice(-4);
  return `${getChar()}-${getChar()}-${getChar()}-${getChar()}`;
};

export default uniqueId;
