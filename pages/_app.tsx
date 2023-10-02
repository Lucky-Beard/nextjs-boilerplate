import '../assets/styles/reset.scss';
import '../assets/styles/designTokens.scss';
import '../assets/styles/globals.scss';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/store';
import { NextPage } from 'next';
import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useRef
} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { GoogleTagManager } from '@/utils/google-tag-manager';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/utils/theme';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

type AppContextType = {
  rootRef: React.RefObject<HTMLDivElement> | null;
};

export const AppContext = createContext<AppContextType>({ rootRef: null });

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const rootRef = useRef<HTMLDivElement>(null);

  const GTM_Key = 'GTM-XXXXXXXX';

  useEffect(() => {
    GoogleTagManager(window, document, 'script', 'dataLayer', GTM_Key);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div ref={rootRef}>
          <AppContext.Provider value={{ rootRef: rootRef }}>
            {getLayout(
              <>
                <noscript>
                  <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${GTM_Key}`}
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                  ></iframe>
                </noscript>

                <Component {...pageProps} />
              </>
            )}
          </AppContext.Provider>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
