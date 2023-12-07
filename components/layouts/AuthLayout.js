import Link from 'next/link';
import { useState } from 'react';

const AuthLayout = ({ children }) => {
  const [first, setfirst] = useState(0);
  return (
    <div className="flex gap-5">
      <div className="bg-[#F5F5F5] rounded-[10px] overflow-auto w-1/5 flex">
        <div>
          <input placeholder={first} />
          <button onClick={() => setfirst(first + 1)}>aaa</button>
          <Link href="/">Home</Link>
          <Link href="/test">About</Link>
        </div>
      </div>
      <div className="bg-[#F5F5F5] rounded-[10px] overflow-auto w-4/5">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
