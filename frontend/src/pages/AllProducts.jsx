import { useState, useEffect } from 'react';
import { getAllProducts, deleteProduct } from '../api/api';
import ProductCard from '../components/ProductCard';
import Swal from 'sweetalert2';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2563eb',
      cancelButtonColor: '#64748b',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        await deleteProduct(id);
        setProducts(products.filter(p => p._id !== id));
        Swal.fire(
          'Deleted!',
          'Product has been deleted.',
          'success'
        );
      } catch (error) {
        Swal.fire(
          'Error!',
          'Something went wrong.',
          'error'
        );
      }
    }
  };

  if (loading) {
    return (
      <div className="loader">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="container fade-in">
      <div className="page-header">
        <h1 className="page-title">All Products</h1>
        <p className="page-subtitle">View and manage all available gadgets.</p>
      </div>

      {products.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '12px' }}>
          <p>No products available yet.</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <ProductCard 
              key={product._id} 
              product={product} 
              onDelete={handleDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
