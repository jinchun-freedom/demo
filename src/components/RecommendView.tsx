import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { format } from '~/utils';

export default function DetailView({
  id,
  name,
  dateStr,
  imgSrc,
  isLoading,
  push,
}: {
  id: number;
  name: string;
  dateStr: string;
  imgSrc: string;
  isLoading: boolean;
  push(href: string, options?: NavigateOptions): void;
}) {
  return (
    <div className="flex h-[185px] snap-start pl-6">
      <div className="flex min-w-[250px] flex-1 shrink-0 overflow-hidden">
        <div className="flex flex-1 rounded-lg border-2 p-4">
          <div className="flex flex-1 flex-col gap-6">
            <div className="flex flex-1 gap-6">
              <div className="w-[25px] shrink-0">
                <img alt="" loading="lazy" src={imgSrc} />
              </div>
              <div className="flex flex-col">
                <div>{name}</div>
                <div className="text-xs">{!isLoading && <span>{format(dateStr)}</span>}</div>
              </div>
            </div>
            {isLoading && <div className="text-center">...</div>}
            <div
              className="flex flex-1 items-end"
              onClick={() => {
                push(`/${id}`);
              }}
            >
              {!isLoading && <div className="font-bold text-sky-400">View details</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
