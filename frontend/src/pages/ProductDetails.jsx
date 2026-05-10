import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="loader">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!product) return <div className="container text-center py-20">Product not found.</div>;

  return (
    <div className="container fade-in">
      <Link to="/" className="btn btn-outline" style={{ width: 'auto', display: 'inline-flex', marginBottom: '2rem' }}>
        <ArrowLeft size={18} />
        <span>Back to Products</span>
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', background: 'white', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
        <div>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }}
          />
        </div>

        <div>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>
            {product.category}
          </span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{product.name}</h1>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '2rem' }}>
            ${product.price}
          </div>
          
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              Product Description
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.8' }}>
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
