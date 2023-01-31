import type { DependencyList } from 'react';
import { useRef } from 'react';

const depsAreSame = (deps: DependencyList, oldDeps: DependencyList): boolean => {
  if (oldDeps === deps) return true;

  for (let i = 0; i < oldDeps.length; i++) {
    // 判断两个值是否是同一个值
    if (!Object.is(oldDeps[i], deps[i])) return false;
  }

  return true;
}

const useCreation = <T>(callback: () => T, deps: DependencyList) => {

  const { current } = useRef({
    deps,
    obj: undefined as undefined | T,
    initialized: false,
  })

  if (!current.initialized || !depsAreSame(deps, current.deps)) {
    current.deps = deps;
    current.obj = callback();
    current.initialized = true;
  }

  return current.obj as T
}

export default useCreation;
