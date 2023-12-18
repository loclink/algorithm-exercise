export interface Stack<T = any> {
  push: (element: T) => void;
  pop: () => T | undefined;
  peek: () => T | undefined;
  isEmpty: () => boolean;
  size: () => number;
}
