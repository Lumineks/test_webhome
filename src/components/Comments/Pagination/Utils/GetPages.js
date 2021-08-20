const getPages = (start, end) => {
  const array = [];

  for (let i = start; i < end; i++) {
    array.push(i);
  }

  return array;
}

export default getPages;