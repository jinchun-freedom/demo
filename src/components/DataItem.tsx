import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useState } from 'react';
import { format } from '~/utils';

export default function DataItem({
  id,
  name,
  dateStr,
  push,
}: {
  id: number;
  name: string;
  dateStr: string;
  push(href: string, options?: NavigateOptions): void;
}) {
  return (
    <div
      className="flex items-center rounded px-4 py-2 transition-colors hover:bg-slate-100 animate-[slide-up_.25s_ease-in-out]"
      onClick={() => {
        push(`/${id}`);
      }}
    >
      <div className="flex-1">{name}</div>
      <div className="text-sm">{format(dateStr)}</div>
    </div>
  );
}
