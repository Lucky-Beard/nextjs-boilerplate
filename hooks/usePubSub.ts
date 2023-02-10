import { useEffect, useRef } from 'react';
// TODO import React Context root ref instead of document.
export const usePubSub = () => {
  const savedCallback = useRef<any>(null);
  const event = useRef<any>();

  const dispatch = (e: string, data?: any) => {
    document.dispatchEvent(new CustomEvent(e, { detail: data }));
  };

  const on = (evnt: string, callback: any): void => {
    removeListener();
    savedCallback.current = callback;
    event.current = evnt;
    // make sure we don't do duplicates
    document.addEventListener(evnt, savedCallback.current);
  };

  const removeListener = () => {
    if (savedCallback.current) {
      console.log('Removing listener');
      document.removeEventListener(event.current, savedCallback.current);
      savedCallback.current = null;
    }
  };

  useEffect(() => {
    return () => {
      removeListener();
    };
  }, []);

  const pubSub = {
    on,
    dispatch
  };

  return pubSub;
};
