import { useLocation } from "react-router-dom";
import TextButton from "../../ui/Buttons/TextButton";

function BookDetails() {
  const location = useLocation();
  const { book } = location.state;

  return (
    <div>
      <img src={book.image} alt="bookImage" />
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <p>{book.shortDescription}</p>
      <p>{book.description}</p>
      <TextButton text="Add to cart" />
    </div>
  );
}

export default BookDetails;
