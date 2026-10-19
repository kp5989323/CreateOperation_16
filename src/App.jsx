import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  function addProduct(e) {
    e.preventDefault();

    setProducts([...products, { name, price }]);
    setName('');
    setPrice('');
  }

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">

        <h1 className="text-2xl font-bold text-blue-600 text-center mb-5">
          Product Management
        </h1>

        <form onSubmit={addProduct}>
          <input
            className="border p-2 w-full mb-3 rounded"
            placeholder="Product Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <input
            className="border p-2 w-full mb-3 rounded"
            type="number"
            placeholder="Product Price"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          />

          <button className="bg-blue-600 text-white p-2 w-full rounded">
            Add Product
          </button>
        </form>

        <h2 className="text-xl font-bold mt-5">Product List</h2>

        {products.map((p, i) => (
          <div key={i} className="bg-blue-100 p-3 mt-2 rounded">
            {p.name} - ₹{p.price}
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;