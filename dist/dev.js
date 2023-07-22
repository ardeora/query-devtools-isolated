import { createSignal, render, lazy, createComponent, mergeProps } from './chunk/FVXYEDUL.js';

// src/index.tsx
var TanstackQueryDevtools = class {
  isMounted = false;
  constructor(config) {
    const {
      client,
      queryFlavor,
      version,
      onlineManager,
      buttonPosition,
      position,
      initialIsOpen,
      errorTypes
    } = config;
    this.client = createSignal(client);
    this.queryFlavor = queryFlavor;
    this.version = version;
    this.onlineManager = onlineManager;
    this.buttonPosition = createSignal(buttonPosition);
    this.position = createSignal(position);
    this.initialIsOpen = createSignal(initialIsOpen);
    this.errorTypes = createSignal(errorTypes);
  }
  setButtonPosition(position) {
    this.buttonPosition[1](position);
  }
  setPosition(position) {
    this.position[1](position);
  }
  setInitialIsOpen(isOpen) {
    this.initialIsOpen[1](isOpen);
  }
  setErrorTypes(errorTypes) {
    this.errorTypes[1](errorTypes);
  }
  setClient(client) {
    this.client[1](client);
  }
  mount(el) {
    if (this.isMounted) {
      throw new Error("Devtools is already mounted");
    }
    const dispose = render(() => {
      const [btnPosition] = this.buttonPosition;
      const [pos] = this.position;
      const [isOpen] = this.initialIsOpen;
      const [errors] = this.errorTypes;
      const [queryClient] = this.client;
      let Devtools;
      if (this.Component) {
        Devtools = this.Component;
      } else {
        Devtools = lazy(() => import('./Devtools/XL6HWYAJ.js'));
        this.Component = Devtools;
      }
      const _self$ = this;
      return createComponent(Devtools, mergeProps({
        get queryFlavor() {
          return _self$.queryFlavor;
        },
        get version() {
          return _self$.version;
        },
        get onlineManager() {
          return _self$.onlineManager;
        }
      }, {
        get client() {
          return queryClient();
        },
        get buttonPosition() {
          return btnPosition();
        },
        get position() {
          return pos();
        },
        get initialIsOpen() {
          return isOpen();
        },
        get errorTypes() {
          return errors();
        }
      }));
    }, el);
    this.isMounted = true;
    this.dispose = dispose;
  }
  unmount() {
    if (!this.isMounted) {
      throw new Error("Devtools is not mounted");
    }
    this.dispose?.();
    this.isMounted = false;
  }
};

export { TanstackQueryDevtools };
