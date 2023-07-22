import { Query, QueryClient, onlineManager } from '@tanstack/query-core';
import { Component, Signal } from 'solid-js';

type XPosition = 'left' | 'right';
type YPosition = 'top' | 'bottom';
type DevtoolsPosition = XPosition | YPosition;
type DevtoolsButtonPosition = `${YPosition}-${XPosition}`;
interface DevToolsErrorType {
    /**
     * The name of the error.
     */
    name: string;
    /**
     * How the error is initialized.
     */
    initializer: (query: Query) => Error;
}
interface QueryDevtoolsProps {
    readonly client: QueryClient;
    queryFlavor: string;
    version: string;
    onlineManager: typeof onlineManager;
    buttonPosition?: DevtoolsButtonPosition;
    position?: DevtoolsPosition;
    initialIsOpen?: boolean;
    errorTypes?: DevToolsErrorType[];
}

declare const DevtoolsComponent: Component<QueryDevtoolsProps>;

interface TanstackQueryDevtoolsConfig extends QueryDevtoolsProps {
}
declare class TanstackQueryDevtools {
    client: Signal<QueryClient>;
    onlineManager: typeof onlineManager;
    queryFlavor: string;
    version: string;
    isMounted: boolean;
    buttonPosition: Signal<DevtoolsButtonPosition | undefined>;
    position: Signal<DevtoolsPosition | undefined>;
    initialIsOpen: Signal<boolean | undefined>;
    errorTypes: Signal<DevToolsErrorType[] | undefined>;
    Component: typeof DevtoolsComponent | undefined;
    dispose?: () => void;
    constructor(config: TanstackQueryDevtoolsConfig);
    setButtonPosition(position: DevtoolsButtonPosition): void;
    setPosition(position: DevtoolsPosition): void;
    setInitialIsOpen(isOpen: boolean): void;
    setErrorTypes(errorTypes: DevToolsErrorType[]): void;
    setClient(client: QueryClient): void;
    mount<T extends HTMLElement>(el: T): void;
    unmount(): void;
}

export { DevToolsErrorType, DevtoolsButtonPosition, DevtoolsPosition, TanstackQueryDevtools, TanstackQueryDevtoolsConfig };
