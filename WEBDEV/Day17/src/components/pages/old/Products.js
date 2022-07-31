import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Products = () => {
  return (
    <section>
      <ul>
        <li>
          <Link to="/products/p1"> Books</Link>
        </li>
        <li>
          <Link to="/products/p2">Games</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
  // <h1>All product available</h1>;
};

export default Products;
