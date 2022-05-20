import { useEffect } from 'react';
import useLatest from '../useLatest';

function useUnmount(fn) {
  const fnRef = useLatest(fn);
  useEffect(() => {
    return () => {
      fnRef.current();
    }
  }, [input])
}

export default useUnmount;