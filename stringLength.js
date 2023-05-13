export default stringLength = (string) => {
    const length = string.length;
  
    if (length === 0) {
      throw new Error('String is empty');
    }
  
    if (length > 10) {
      throw new Error('String is too long');
    }
  
    return length;
}

