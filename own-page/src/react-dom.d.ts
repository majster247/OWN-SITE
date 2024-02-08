// src/react-dom.d.ts
declare module 'react-dom' {
    import { Root } from 'react-dom';
  
    interface ReactDOM {
      createRoot: (container: Element | DocumentFragment | null) => Root;
    }
  
    const ReactDOM: ReactDOM;
  
    export = ReactDOM;
  }
  