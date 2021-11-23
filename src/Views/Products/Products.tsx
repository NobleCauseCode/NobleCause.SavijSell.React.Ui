import { ReactElement, useState } from 'react';
import { Product } from '../../Models/Product';
import './Products.css';
interface Props {}

const productsList: Product[] = [
  {
    id: 1,
    title: 'Product 1',
    price: 10,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://picsum.photos/200/300',
    location: '55555',
  },
  {
    id: 2,
    title: 'Product 2',
    price: 20,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://picsum.photos/200/300',
    location: '66666',
  },
];

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export default function Products(): ReactElement {
  const [products, setProducts] = useState<Product[]>(productsList);
  return (
    <div className='text-center'>
      <h1 className='display-4'>SavijSell</h1>
      <hr />
      <div className='row row-cols-3 row-cols-md-3 row-cols-sm-1 g-4'>
        {products.map((product: Product) => {
          return (
            <div className='col'>
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
