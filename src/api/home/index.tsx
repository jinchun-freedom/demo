import axios from 'axios';
import { DataItemType } from '~/types';

export const getDataList = async (search?: string) => {
  return axios.get<unknown, { data: { result?: DataItemType[] } }>('/home/list', {
    params: {
      q: search,
    },
  });
};

export const getRecommendPositionData = async () => {
  const { data } = await getDataList();
  if (data && data.result && data.result.length > 0) {
    const first = Math.floor(Math.random() * 10);
    const second = Math.floor(Math.random() * 10);
    const recommendData = [
      data.result.find(c => c.id === first),
      data.result.find(c => c.id === second),
    ];
    return recommendData;
  }
  return [];
};

export const getDetail = async (id: number | string) => {
  return axios.get<unknown, { data: { result?: DataItemType } }>('/home/detail', {
    params: {
      id,
    },
  });
};
