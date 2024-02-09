import React, { useContext, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { AppContext } from '@/pages/_app';
import { useEffect, useState } from 'react';
React.useLayoutEffect = React.useEffect;

// this hook allows us to use gsap within react by creating a gsap context
// which permits the use of regular class references like .header.
// the hook relies on a custom context created at app level which gives us access to the root element's ref

export const useGSAP = (gsapFunction: any, dependencyList: any[] = []) => {
  const { rootRef } = useContext(AppContext);
  const [lr, setLR] = useState<boolean>(false);

  useEffect(() => {
    if (lr && rootRef && rootRef.current !== null) {
      let ctx = gsap.context(gsapFunction, rootRef); // <- IMPORTANT! Scopes selector text
      return () => {
        ctx.revert();
      }; // cleanup
    }
  }, [lr, rootRef, ...dependencyList]);

  useLayoutEffect(() => {
    setLR(true);
  }, []);
};
