import dynamic from 'next/dynamic';
import { FC, memo, PropsWithChildren, ReactNode, useEffect } from 'react';
import { Roboto } from 'next/font/google';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/index';
import { setUser } from '@slices/authenticationSlice';
import { fetchUserInfo } from '@slices/userSlice';

const Footer = dynamic(() => import('../Footer'));
const Navigation = dynamic(() => import('../Navigation'));

interface Props {
  children?: ReactNode;
  footer?: boolean;
}

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Layout: FC<PropsWithChildren<Props>> = memo((props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  if (typeof window !== 'undefined') {
    if (typeof (window as any).ethereum !== 'undefined') {
      (window as any).ethereum.on('accountsChanged', async () => {
        dispatch(setUser((window as any).ethereum.selectedAddress));
        dispatch(fetchUserInfo((window as any).ethereum.selectedAddress));
      });
    }
  }

  return (
    <div className={`${roboto.className} min-h-screen flex flex-col`}>
      <Navigation />
      <div className="flex-1 flex flex-col">{props.children}</div>
      {props.footer === true ? <Footer /> : <></>}
    </div>
  );
});
Layout.displayName = 'Layout';
export default Layout;
