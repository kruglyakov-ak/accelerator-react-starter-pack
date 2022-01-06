import { Guitar } from '../../types/guitar';
import ProductCardItem from '../prodact-card-item/prodact-card-item';

type ProductCardsListProps = {
  guitars: Guitar[],
}

function ProductCardsList({ guitars }: ProductCardsListProps): JSX.Element {
  return (
    <div className="cards catalog__cards">
      {guitars.map((guitar) => <ProductCardItem key={guitar.id} guitar={guitar} />)}
    </div>
  );
}

export default ProductCardsList;
