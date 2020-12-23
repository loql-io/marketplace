import React from 'react';
import { categories } from '../../pages/api/categories';
import { products } from '../../pages/api/products';
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

  const handleClick = (e, name) => {
    e.preventDefault();
    fetch(name);
    setSelectedFilter(name);
  };

  const fetch = async (filter) => {
    const responseProducts = await products(filter);
    setProductsData(responseProducts?.search?.edges);
  };

  React.useEffect(async () => {
    const responseCategories = await categories();
    setCategoryData(responseCategories.topics[0].children);
    fetch(responseCategories.topics[0].children[0].name);
    setSelectedFilter(responseCategories.topics[0].children[0].name);
  }, []);

  return (
    <ProductsFilter>
      <Chips>
        {categoryData.map((item, index) => (
          <Chip
            key={index}
            className={selectedFilter === item.name ? 'selected' : ''}
            onClick={(e) => handleClick(e, item.name)}
          >
            {item.name}
          </Chip>
        ))}
      </Chips>
      {productsData.map((item, index) => (
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
      ))}
    </ProductsFilter>
  );
};

export default Products;
