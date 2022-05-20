import { useEffect } from 'react';

// 只在初始化执行
function useMount(fn) {
  useEffect(() => {
    fn?.();
  }, [])
}

export default useMount;