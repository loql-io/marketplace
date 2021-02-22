import React, { useEffect } from 'react';
import { categories } from '../../pages/api/categories';
import { useT } from 'lib/i18n';
import { screen } from 'ui';
import {
  ProductsFilter,
  Chip,
  Chips,
  Items,
  ImageContainer,
  ItemName,
  ItemPrice,
  ProductItems,
  Img
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

  const imageMdWidth = 100 / (4 ?? 1);

  function getImageSize({ variants } = {}) {
    if (variants) {
      const biggestImage = variants.sort((a, b) => b.width - a.width)[0];
      const { width, height } = biggestImage;
      return {
        width,
        height
      };
    }
    return {};
  }

  useEffect(() => {
    async function fetchData() {
      const all = [];
      const responseCategories = await categories();
      const allItems = responseCategories.topics[0].children
        .flatMap((item) => item.items.edges)
        .map((item) => item?.node)
        .filter((v, i, a) => a.findIndex((t) => t?.id === v?.id) === i);

      Object.entries(allItems).forEach(function (item) {
        all.push({ node: item[1] });
      });

      const allFiltered = all.filter((item) => item?.node?.variants);

      responseCategories.topics[0].children.unshift({
        name: 'All',
        items: { edges: allFiltered }
      });

      const filtered = responseCategories.topics[0].children.filter(
        (item) => item?.items?.edges
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
            item?.items?.edges && (
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
      <ProductItems>
        {productsData.map(
          (item, index) =>
            item.node.variants && (
              <Items key={index}>
                <a href={`${item.node.path}`}>
                  <ImageContainer>
                    <Img
                      {...item.node.variants[0].image}
                      {...getImageSize(item.node.variants[0].image)}
                      alt={name}
                      sizes={`(min-width ${screen.xs}px) ${imageMdWidth}vw, 60vw`}
                    />

                    {/*  <img src={item.node.variants[0].images[0].url} />  */}
                  </ImageContainer>
                  <ItemName>{item.node.variants[0].name}</ItemName>
                  <ItemPrice>
                    {`${t('common.price', {
                      value: item.node.variants[0].price,
                      currency: item.node.variants[0].priceVariants[0].currency
                    })}`}
                  </ItemPrice>
                </a>
              </Items>
            )
        )}
      </ProductItems>
    </ProductsFilter>
  );
};

export default Products;
