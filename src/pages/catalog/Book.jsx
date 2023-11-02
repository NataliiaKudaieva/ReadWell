/* eslint-disable react/prop-types */
import styles from "./Book.module.css";
import TextButton from "../../ui/Buttons/TextButton";
import { Link } from "react-router-dom";

export default function Book({ book }) {
  return (
    <div className={styles.book}>
      <img src={book.image} alt="bookImage" className={styles.bookImg} />
      <h1 className={styles.bookTitle}>{book.title}</h1>
      <h2 className={styles.bookAuthor}>{book.author}</h2>
      <p className={styles.bookShortDesc}>{book.shortDescription}</p>
      {/* <p className={styles.bookFullDesc}>{book.description}</p> */}

      <Link to="catalog:id">
        <TextButton text="Show more" />
      </Link>
    </div>
  );
}
