'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Image from 'next/image';
import avatar from '../app/assets/images/image-avatar.webp';

type BlogCardProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Illustration() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 336 201'
      className='w-64 sm:w-80'
    >
      <g clip-path='url(#a)'>
        <path fill='#F4D04E' d='M0 .5h336v200H0z' />
        <rect
          width='139'
          height='95'
          x='87.996'
          y='77.729'
          fill='#fff'
          rx='47.5'
          transform='rotate(-45 87.996 77.729)'
        />
        <rect
          width='139'
          height='95'
          x='54.055'
          y='77.729'
          fill='#111'
          rx='47.5'
          transform='rotate(-45 54.055 77.729)'
        />
        <path
          fill='#111'
          d='M234.864 209.036 451.4-7.5l67.175 67.175-216.536 216.536z'
        />
        <rect
          width='139'
          height='95'
          x='20.114'
          y='77.729'
          fill='#fff'
          rx='47.5'
          transform='rotate(-45 20.114 77.729)'
        />
        <rect
          width='204.19'
          height='270.554'
          fill='#111'
          rx='102.095'
          transform='scale(-1 1) rotate(45 -103.887 14.564)'
        />
        <path
          stroke='#fff'
          stroke-width='3'
          d='m6.69-357.5 135.583 135.727c12.481 12.494 12.481 32.737 0 45.231L-45.544 11.475c-12.481 12.494-12.481 32.737 0 45.23L107.088 209.5'
        />
        <path
          stroke='#111'
          stroke-width='3'
          d='M69.965 71.719v23.334h23.334M136.079 52.273V28.94h-23.334M102.845 38.838v46.67M210.364-37.5l60.873 60.873c12.497 12.496 12.497 32.758 0 45.254l-77.745 77.746c-12.497 12.496-12.497 32.758 0 45.254l69.872 69.873'
        />
        <path
          stroke='#111'
          stroke-width='3'
          d='m253.339 149.574-12.144 12.145 14.256 14.257v12.672h12.673l13.729 13.729 12.145-12.145M278.685 124.228l-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145M304.031 98.883l-12.145 12.144 14.257 14.257v12.673h12.673l13.729 13.729 12.144-12.145M329.376 73.537l-12.145 12.145 14.257 14.257v12.672h12.673l13.729 13.729 12.145-12.144'
        />
        <path
          stroke='#fff'
          stroke-width='5'
          d='m354.722 48.191-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145'
        />
        <mask
          id='b'
          width='285'
          height='285'
          x='234'
          y='-8'
          maskUnits='userSpaceOnUse'
          style={{ maskType: 'alpha' }}
        >
          <path
            fill='#111'
            d='M234.864 209.036 451.4-7.5l67.175 67.175-216.536 216.536z'
          />
        </mask>
        <g stroke='#fff' mask='url(#b)'>
          <path
            stroke-width='3'
            d='m253.339 149.574-12.144 12.145 14.256 14.257v12.672h12.673l13.729 13.729 12.145-12.145M278.685 124.228l-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145M304.031 98.883l-12.145 12.144 14.257 14.257v12.673h12.673l13.729 13.729 12.144-12.145M329.376 73.537l-12.145 12.145 14.257 14.257v12.672h12.673l13.729 13.729 12.145-12.145'
          />
          <path
            stroke-width='5'
            d='m354.722 48.191-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145'
          />
        </g>
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 .5h336v200H0z' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function BlogCard({ className, children }: BlogCardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);
  return (
    <Card
      className={cn(
        'border-black dark:border-none shadow-[7px_7px_0_hsl(0_0%_0%)] dark:shadow-[7px_7px_0_hsl(0_0%_100%)] sm:max-w-[23rem] max-w-[19rem]',
        className
      )}
    >
      <CardHeader>
        <Illustration />
      </CardHeader>
      <CardContent>
        <section className='flex flex-col gap-2'>
          <span className='rounded bg-background py-1 px-3 w-min text-xs font-extrabold block'>
            Learning
          </span>
          <p className='text-sm font-medium'>Published 21 Dec 2023</p>
          <h1 className='text-primary text-xl font-extrabold dark:text-foreground hover:text-background cursor-pointer'>
            HTML & CSS foundations
          </h1>
          <p className='text-muted-foreground leading-5 text-sm'>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </section>
      </CardContent>
      <CardFooter>
        <div className='flex items-center gap-3'>
          <Image height={30} width={30} alt='author picture' src={avatar} />
          <p className='font-extrabold'>Greg Hooper</p>
        </div>
      </CardFooter>
    </Card>
  );
}
