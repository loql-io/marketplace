import React, { useEffect } from 'react';
import { categories } from '../../pages/api/categories';
import { useT } from 'lib/i18n';

import {
  ProductsFilter,
  Chip,
  Chips,
  Items,
  ImageContainer,
  ItemName,
  ItemPrice,
  FadeIn
} from './styles';

const Products = () => {
  const t = useT();

  const [categoryData, setCategoryData] = React.useState([]);
  const [productsData, setProductsData] = React.useState([]);
  const [selectedFilter, setSelectedFilter] = React.useState('');

  const handleClick = (e, data, name) => {
    e.preventDefault();
    setSelectedFilter(name);
    setProductsData(data);
  };

  useEffect(() => {
    async function fetchData() {
      const responseCategories = await categories();
      const filtered = responseCategories.topics[0].children.filter(
        (item) => item.items.edges
      );
      setCategoryData(responseCategories.topics[0].children);
      setProductsData(filtered[0].items.edges);
      setSelectedFilter(filtered[0].name);
    }
    fetchData();
  }, []);

  return (
    <ProductsFilter>
      <Chips>
        {categoryData.map(
          (item, index) =>
            item.items.edges && (
              <Chip
                key={index}
                className={selectedFilter === item.name ? 'selected' : ''}
                onClick={(e) => handleClick(e, item.items.edges, item.name)}
              >
                {item.name}
              </Chip>
            )
        )}
      </Chips>
      {productsData.map(
        (item, index) =>
          item.node.variants && (
            <FadeIn key={index}>
              <Items>
                <a href={`${item.node.path}`}>
                  <ImageContainer>
                    <img src={item.node.variants[0].images[0].url} />
                  </ImageContainer>
                  <ItemName>{item.node.variants[0].name}</ItemName>
                  <ItemPrice>
                    {t('common.price', {
                      value: item.node.variants[0].price,
                      currency: item.node.variants[0].priceVariants[0].currency
                    })}
                  </ItemPrice>
                </a>
              </Items>
            </FadeIn>
          )
      )}
    </ProductsFilter>
  );
};

export default Products;
