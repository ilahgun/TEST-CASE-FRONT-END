import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Memanggil API dari /api/products
    const fetchProducts = async () => {
      const res = await fetch("../api/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Rp.{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
