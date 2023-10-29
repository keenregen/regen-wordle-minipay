import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { Provider } from 'react-redux';
import Layout from '@src/components/layout/Layout';
import store from '@store/index';
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "@wagmi/core/connectors";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

const { chains, publicClient } = configureChains(
  [Celo, Alfajores],
  [publicProvider()]
);

const connectors = [new InjectedConnector({chains})]

const wagmiConfig = createConfig({
  connectors,
  publicClient: publicClient,
});

const appInfo = {
  appName: "Celo Composer",
};


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
        <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} appInfo={appInfo} coolMode={true}>
        <Provider store={store}>
          <Layout footer={false}>{page}</Layout>
        </Provider>
        </RainbowKitProvider>
        </WagmiConfig>
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

