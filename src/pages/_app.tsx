import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { Provider } from 'react-redux';
import Layout from '@src/components/layout/Layout';
import store from '@store/index';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const getLayout =
    (Component as NextPageWithLayout).getLayout ??
    ((page: ReactNode) => {
      return (
        <Provider store={store}>
          <Layout footer={true}>{page}</Layout>
        </Provider>
      );
    });

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

