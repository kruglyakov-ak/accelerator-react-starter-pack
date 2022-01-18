import { Comment } from '../../types/comment';
import { Guitar } from '../../types/guitar';
import ProductCardItem from '../prodact-card-item/prodact-card-item';

type ProductCardsListProps = {
  guitars: Guitar[],
  comments: Comment[],
}

function ProductCardsList({ guitars, comments }: ProductCardsListProps): JSX.Element {
  return (
    <div className="cards catalog__cards">
      {guitars.map((guitar) => <ProductCardItem key={guitar.id} guitar={guitar} comments={comments.filter((comment) => guitar.id === comment.guitarId)}/>)}
    </div>
  );
}

export default ProductCardsList;
