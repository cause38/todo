import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex h-screen w-screen min-w-[24rem] items-center justify-center'>
      <div className='flex h-full w-full max-w-[30rem] flex-col gap-y-5 bg-zinc-100 p-4'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
