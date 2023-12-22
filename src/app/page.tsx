'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useSWR from 'swr';
import { getDataList, getRecommendPositionData } from '~/api/home';
import DataItem from '~/components/DataItem';
import DetailView from '~/components/RecommendView';
import '~/@fake-db';

export default function HomePage() {
  const { push } = useRouter();
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const { isLoading, data } = useSWR(
    ['/home/list', searchValue],
    ([url, value]) => getDataList(value),
    {},
  );

  const { isLoading: recommendLoading, data: recommendData } = useSWR(
    '/home/recommend',
    getRecommendPositionData,
    {
      refreshInterval: 3000,
    },
  );

  return (
    <div className=" my-16 flex select-none flex-col gap-10">
      <h1 className="text-3xl font-bold">Beam 🍺</h1>
      <div className="-mx-6 grid snap-x grid-flow-col  overflow-y-auto pr-6">
        <DetailView
          id={recommendData ? (recommendData[0]?.id as number) : -1}
          name={recommendData ? (recommendData[0]?.name as string) : ''}
          dateStr={recommendData ? (recommendData[0]?.date as string) : ''}
          imgSrc={recommendData ? (recommendData[0]?.img as string) : ''}
          isLoading={recommendLoading}
          push={push}
        />
        <DetailView
          id={recommendData ? (recommendData[0]?.id as number) : -1}
          name={recommendData ? (recommendData[1]?.name as string) : ''}
          dateStr={recommendData ? (recommendData[1]?.date as string) : ''}
          imgSrc={recommendData ? (recommendData[1]?.img as string) : ''}
          isLoading={recommendLoading}
          push={push}
        />
      </div>
      <div className="flex flex-col gap-3">
        <input
          className="rounded-lg border-2 px-4 py-2 outline-none"
          placeholder="Search..."
          type="text"
          onChange={e => {
            setSearchValue(e.target.value);
          }}
        />
        <div className="flex flex-col m">
          {data?.data?.result?.map(item => (
            <DataItem id={item.id} name={item.name} dateStr={item.date} push={push} />
          ))}
        </div>
      </div>
    </div>
  );
}
