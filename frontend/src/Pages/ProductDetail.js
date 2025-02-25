import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductGallery } from "../Components/ProductGallery";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error al obtener el producto:", error));
  }, [id]);

  return (
    <div>
      {product ? <ProductGallery product={product} /> :
       <p> <div class="h-screen bg-white">
            <div class="flex justify-center items-center h-full">
            <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
            </div>
            </div>
        </p>}
    </div>
  );
};

export default ProductDetail;
