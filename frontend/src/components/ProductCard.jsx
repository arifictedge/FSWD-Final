import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="product-card fade-in">
      <img src={product.image} alt={product.name} className="card-image" />
      <div className="card-info">
        <div className="card-category">{product.category}</div>
        <h3 className="card-name">{product.name}</h3>
        <div className="card-price">${product.price}</div>
        
        <div className="card-footer">
          <Link 
            to={`/products/${product._id}`} 
            className="btn btn-outline"
          >
            Details
          </Link>
          <button 
            onClick={() => onDelete(product._id)}
            className="btn btn-delete"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
