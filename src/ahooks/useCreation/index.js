import { useRef } from "react";
import depsAreaSome from "../util/depsAreSame";

// useCreation 是 useMemo 或 useRef 的替代品
function useCreation(fn, deps) {
  const { current } = useRef({
    deps,
    obj: undefined,
    initialized: true,
  });
  if (current.initialized === false || !depsAreaSome(current.deps, deps)) {
    current.initialized = true;
    current.obj = fn();
    current.deps = deps;
  }
  return current.obj;
}
export default useCreation;