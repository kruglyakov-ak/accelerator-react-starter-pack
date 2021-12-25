import CatalogFilterPrice from '../catalog-filter-price/catalog-filter-price';
import CatalogFilterStringCount from '../catalog-filter-string-count/catalog-filter-string-count';
import CatalogFilterType from '../catalog-filter-type/catalog-filter-type';

function CatalogFilter(): JSX.Element {
  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <CatalogFilterPrice />
      <CatalogFilterType />
      <CatalogFilterStringCount />
    </form>
  );
}

export default CatalogFilter;
