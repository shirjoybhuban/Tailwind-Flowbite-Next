import Image from 'next/image';
import {
  setUserDetails,
  setUserToken,
} from 'pages/api/redux-toolkit/users/usersSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import logoSpinning from '../../public/images/logo-spinning.gif';
import axios from 'axios';

const Layout = ({ children }) => {
  let [hydrating, setHydrating] = useState(true);
  const { userToken } = useSelector((state) => state.usersSlice);



  // if(hydrating){
  //   return(
  //     <div className="m-auto">
  //       <Image src={logoSpinning} alt="logo-Loader" width={"60"} />
  //       <p className='font-semibold text-base mt-2'>Initializing</p>
  //     </div>
  //   )
  // }
  return (
    <>
     {children}
    </>
  );
};

export default Layout;
