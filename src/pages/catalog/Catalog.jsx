import Book from "./Book";
import { getBooks } from "../../services/api/api";
import { useEffect, useState } from "react";
import styles from "./Catalog.module.css";

export default function Catalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const books = await getBooks();

        setBooks(books);
      } catch (err) {
        console.log(err.message);
      }
    }
    getData();
  }, []);

  return (
    <div className={styles.catalog}>
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}

      {/* {isLoading && <CircularProgress />} */}
    </div>
  );
}
