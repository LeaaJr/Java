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
        <div className="h-screen bg-white">
          <div className="flex justify-center items-center h-full">
            <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="Cargando" />
          </div>
        </div>
      }
    </div>
  );
};

export default ProductDetail;
