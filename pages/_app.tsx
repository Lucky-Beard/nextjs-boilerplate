import '../assets/styles/reset.scss';
import '../assets/styles/designTokens.scss';
import '../assets/styles/globals.scss';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/store';
import { NextPage } from 'next';
import { createContext, ReactElement, ReactNode, useRef } from 'react';
import { gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


type AppContextType = {
  rootRef: React.RefObject<HTMLDivElement> | null;
};
export const AppContext = createContext<AppContextType>({ rootRef: null });


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const rootRef = useRef<HTMLDivElement>(null);
  return (
    <Provider store={store}>
      <div ref={rootRef}>
        <AppContext.Provider value={{ rootRef: rootRef }}>
          {getLayout(<Component {...pageProps} />)}
        </AppContext.Provider>
      </div>
    </Provider>
  );
}

export default MyApp;
