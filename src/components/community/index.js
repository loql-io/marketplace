import { useEffect, useState } from 'react';

export const Community = () => {
  const [sideNavigationData, setNavigationData] = useState([]);

  useEffect(() => {
    const sideNavigationData = JSON.parse(
      localStorage.getItem(`sideNavigation_${process.env.NEXT_PUBLIC_TOWN}`)
    );
    setNavigationData(sideNavigationData);
  }, []);

  let eating = [];
  let shopping = [];
  let collections = [];

  const eatingNavigation = sideNavigationData.filter(
    (x) => x.title === 'Eating'
  )[0]?.properties;
  const shoppingNavigation = sideNavigationData.filter(
    (x) => x.title === 'Shopping'
  )[0]?.properties;
  const collectionsNavigation = sideNavigationData.filter(
    (x) => x.title === 'Collections'
  )[0]?.properties;

  if (eatingNavigation) {
    Object.keys(eatingNavigation).forEach((k) => {
      eating.push({
        logo: eatingNavigation[k].value.split(',')[1],
        name: eatingNavigation[k].key,
        url: eatingNavigation[k].value.split(',')[0]
      });
    });
  }

  if (shoppingNavigation) {
    Object.keys(shoppingNavigation).forEach((k) => {
      shopping.push({
        logo: `${shoppingNavigation[k].value}/img/logo.png`,
        name: shoppingNavigation[k].key,
        url: shoppingNavigation[k].value
      });
    });
  }

  if (collectionsNavigation) {
    Object.keys(collectionsNavigation).forEach((k) => {
      collections.push({
        title: collectionsNavigation[k].key.split(',')[0],
        intro: collectionsNavigation[k].key.split(',')[1],
        url: collectionsNavigation[k].value.split(',')[0],
        image: collectionsNavigation[k].value.split(',')[1]
      });
    });
  }

  return {
    shopping,
    eating,
    collections
  };
};

export default Community;
