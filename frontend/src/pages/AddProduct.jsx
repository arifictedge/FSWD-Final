import { useState } from 'react';
import { createProducts } from '../api/api';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    category: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createProducts(formData);
      setLoading(false);
      
      // SweetAlert Success Message (Requested in PDF)
      Swal.fire({
        title: 'Success!',
        text: 'Product Added Successfully',
        icon: 'success',
        confirmButtonColor: '#2563eb'
      });
      
      // Clear Form (Requested in PDF)
      setFormData({
        name: '',
        price: '',
        image: '',
        category: '',
        description: ''
      });

      // Redirect
      navigate('/');
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Something went wrong',
        icon: 'error',
        confirmButtonColor: '#ef4444'
      });
    }
  };

  return (
    <div className="container fade-in">
      <div className="page-header" style={{ textAlign: 'center' }}>
        <h1 className="page-title">Add New Product</h1>
        <p className="page-subtitle">Fill in all fields to add a product.</p>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Product Name</label>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Enter product name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Product Price</label>
            <input
              className="form-input"
              type="number"
              name="price"
              placeholder="Enter product price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Product Image URL</label>
            <input
              className="form-input"
              type="url"
              name="image"
              placeholder="Enter image URL"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Product Category</label>
            <select 
              className="form-input"
              name="category" 
              value={formData.category} 
              onChange={handleChange} 
              required
            >
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Home Appliance">Home Appliance</option>
              <option value="Gadgets">Gadgets</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Product Description</label>
            <textarea
              className="form-input"
              name="description"
              rows="4"
              placeholder="Enter product description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{ marginTop: '1rem', height: '50px' }}
          >
            {loading ? 'Adding...' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
