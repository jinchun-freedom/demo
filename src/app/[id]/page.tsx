'use client';
import { useRouter, useParams } from 'next/navigation';
import useSWR from 'swr';
import '~/@fake-db';
import { getDetail } from '~/api/home';
import { format } from '~/utils';

export default function HomePage() {
  const { push } = useRouter();
  const { id } = useParams();
  const { data } = useSWR(['/home/list', id], ([url, id]) => getDetail(id as string), {});

  return (
    <div className="container my-16 flex select-none flex-col gap-10">
      <div className="flex flex-col gap-9">
        <div
          className="font-bold text-sky-400"
          onClick={() => {
            push('/');
          }}
        >
          Back
        </div>
        <div className="flex gap-6">
          <div className="w-[50px] shrink-0">
            <img alt="" loading="lazy" src={data?.data?.result?.img} />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <div>{data?.data?.result?.name}</div>
              <div className="text-xs">{format(data?.data?.result?.date as string)}</div>
            </div>
            <div>{data?.data?.result?.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
