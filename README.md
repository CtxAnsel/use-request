## useRequest

- useRequest是一个强大的异步数据管理的 Hooks，React 项目中的网络请求场景使用 useRequest 就够了
- useRequest 通过插件式组织代码，核心代码极其简单，并且可以很方便的扩展出更高级的功能。目前已有能力包括：
  - 自动请求/手动请求
  - 轮询
  - 防抖
  - 节流
  - 屏幕聚焦重新请求
  - 错误重试
  - loading delay
  - SWR(stale-while-revalidate)重新请求的同时使用过期数据
  - 缓存

### 依赖Hooks

- useRequest是一个强大的异步数据管理的 Hooks，React项目中的网络请求场景使用 useRequest 就够了
- useUpdateEffect用法等同于 useEffect，但是会忽略首次执行，只在依赖更新时执行
- useCreation 是 useMemo 或 useRef 的替代品
- useLatest返回当前最新值的 Hook，可以避免闭包问题
- useMemoizedFn是持久化 function 的 Hook，理论上，可以使用 useMemoizedFn 完全代替 useCallback
- useMount是只在组件初始化时执行的 Hook
- useUnmount是在组件卸载（unmount）时执行的 Hook。
- useUpdate会返回一个函数，调用该函数会强制组件重新渲染

## 
