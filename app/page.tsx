import BlogCard from '@/components/blog-card';
import { ModeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <main className='relative'>
      <div className='absolute inset-10'>
        <ModeToggle />
      </div>
      <div className='flex justify-center items-center w-full h-full min-h-screen'>
        <BlogCard />
      </div>
    </main>
  );
}
