import React, { useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddProduct = () => {
    if (editIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editIndex] = newProduct;
      setProducts(updatedProducts);
      setEditIndex(null);
    } else {
      setProducts([...products, newProduct]);
    }
    setNewProduct({ title: "", description: "", price: "", image: "" });
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setTotalPrice(totalPrice + parseFloat(product.price));
  };

  const handleEditProduct = (index) => {
    setEditIndex(index);
    const selectedProduct = products[index];
    setNewProduct({ ...selectedProduct });
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    const removedProduct = updatedCart.splice(index, 1)[0];
    setCart(updatedCart);
    setTotalPrice(totalPrice - parseFloat(removedProduct.price));
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Product Page</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Add a Product</h3>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Product Title"
            className="mr-2 px-2 py-1 border rounded"
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Product Description"
            className="mr-2 px-2 py-1 border rounded"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Product Price"
            className="mr-2 px-2 py-1 border rounded"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Product Image URL"
            className="mr-2 px-2 py-1 border rounded"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handleAddProduct}
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Products</h3>
        <ul>
          {products.map((product, index) => (
            <li
              key={index}
              className="border p-4 my-2 flex justify-between items-center"
            >
              <div>
                <h4 className="text-xl font-semibold">{product.title}</h4>
                <p>{product.description}</p>
                <p className="mt-2">${product.price}</p>
              </div>
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 object-cover"
                />
              </div>
              <div>
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mr-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
                  onClick={() => handleEditProduct(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  onClick={() => handleDeleteProduct(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Cart</h3>
        <ul>
          {cart.map((product, index) => (
            <li
              key={index}
              className="border p-4 my-2 flex justify-between items-center"
            >
              <div>
                <h4 className="text-xl font-semibold">{product.title}</h4>
                <p>${product.price}</p>
              </div>
              <div>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  onClick={() => handleRemoveFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4">Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductPage;
