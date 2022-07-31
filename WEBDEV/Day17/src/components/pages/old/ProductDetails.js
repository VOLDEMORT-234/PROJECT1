import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductDetails = () => {
  const Params = useParams();

  console.log(Params.productId);

  return (
    <section>
      {/* <h1>Product Details</h1> */}
      <p> {Params.productId}</p>
    </section>
  );
};

export default ProductDetails;
