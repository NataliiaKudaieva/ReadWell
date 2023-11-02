import Book from "./Book";
import { getBooks } from "../../services/api/api";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

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
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}

      {/* {isLoading && <CircularProgress />} */}
    </Box>
  );
}
