export const getBooks = async () => {
  try {
    const res = await fetch(`http://localhost:8000/books`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
