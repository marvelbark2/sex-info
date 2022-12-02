import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import type { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core'
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader';
import { useRouter } from 'next/router';

config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
    }

    const handleRouteDone = () => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000)

      return () => clearTimeout(timer);
    }

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteDone());

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteDone());
    }
  }, [router]);

  if (loading) return <Loader />
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
