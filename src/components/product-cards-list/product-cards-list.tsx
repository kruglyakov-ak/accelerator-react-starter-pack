import { useSelector } from 'react-redux';
import { getGuitars } from '../../store/guitar-data/selectors';
import ProductCardItem from '../prodact-card-item/prodact-card-item';

function ProductCardsList(): JSX.Element {
  const guitars = useSelector(getGuitars);

  return (
    <div className="cards catalog__cards">
      {guitars.map((guitar) => <ProductCardItem key={guitar.id} guitar={guitar} />)}
    </div>
  );
}

export default ProductCardsList;
