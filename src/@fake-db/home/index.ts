// ** Mock Adapter
import { DataItemType } from '~/types';
import mock from '../../@fake-db/mock';

const data = (): DataItemType[] => {
  const dataList = [];
  for (let index = 0; index < 10; index++) {
    const date = new Date('2012-01-01');
    date.setFullYear(date.getFullYear() + index);
    dataList.push({
      id: index,
      name: `Buzz${index + 1}`,
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      img: 'https://images.punkapi.com/v2/keg.png',
      desc: `A draft-only BrewDog bar exclusive; we have experimented with ageing our Vermount IPA for a short time in bourbon and rye barrels, both known for imparting flavour quickly compared to other types of barrel.`,
    });
  }
  return dataList;
};

//get list api
mock.onGet('/home/list').reply(config => {
  const { q = '' } = config.params;
  const queryLowered = q.toLowerCase();
  const dataList = data();
  const filteredData = queryLowered
    ? dataList.filter(
        item =>
          item.name.toLowerCase().includes(queryLowered) ||
          item.date.toLowerCase().includes(queryLowered),
      )
    : dataList;

  return [
    200,
    {
      params: config.params,
      result: filteredData,
      total: filteredData.length,
    },
  ];
});

//get detail api
mock.onGet('/home/detail').reply(config => {
  const { id } = config.params;
  const detail = data().find(c => c.id == id);

  return [
    200,
    {
      params: config.params,
      result: detail,
    },
  ];
});
