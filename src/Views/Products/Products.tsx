import { ReactElement, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN } from '../../Constants';
import { Product } from '../../Models/Product';
import './Products.css';
import { getAllProducts } from '../../Api/Products.Api';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function Products(): ReactElement {
  const [products, setProducts] = useState<Product[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getInitialProducts = async () => {
      const products = await getAllProducts();
      if (products) {
        setProducts(products);
      }
    };

    const isAuthenticated = localStorage.getItem(TOKEN) !== null;
    if (!isAuthenticated) {
      navigate('/login');
    }

    getInitialProducts();
  }, [navigate]);

  return (
    <div className='text-center'>
      <h1 className='display-4'>SavijSell</h1>
      <hr />
      <div className='row row-cols-3 row-cols-md-3 row-cols-sm-1 g-4'>
        {products.map((product: Product) => {
          return (
            <div key={product.id} className='col'>
              <div className='card mx-auto card-width-normal'>
                <img src={product.image} className='card-img-top' alt='thing' />
                <div className='card-body bg-light'>
                  <h5 className='card-title'>{product.title}</h5>
                  <div>{formatter.format(product.price)}</div>
                  <div>{product.location}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
