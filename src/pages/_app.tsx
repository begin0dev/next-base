import '@/styles/global.scss';

import { type AppProps } from 'next/app';
import { useRef } from 'react';
import { RecoilRoot } from 'recoil';
import { Hydrate, QueryClient, QueryClientProvider, DefaultOptions } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Layout from '@/components/Layout';

const DEFAULT_OPTIONS: DefaultOptions = {
  queries: {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient({ defaultOptions: DEFAULT_OPTIONS }));

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
