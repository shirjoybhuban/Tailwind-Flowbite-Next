import Link from 'next/link';
import { useState } from 'react';
import TopBar from './TopBar';

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="flex gap-5 w-full">
        <div className="bg-[#F5F5F5] rounded-[10px] overflow-auto w-1/5 flex">
          <div></div>
        </div>
        <div className="bg-[#F5F5F5] rounded-[10px] overflow-auto w-4/5">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
