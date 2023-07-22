import { Accessor, Setter } from 'solid-js';

type StorageWithOptions<O> = {
    clear: () => void;
    getItem: (key: string, options?: O) => string | null;
    getAll?: () => {
        [key: string]: any;
    };
    setItem: (key: string, value: string, options?: O) => void;
    removeItem: (key: string) => void;
    key: (index: number) => string | null;
    readonly length: number | undefined;
    [key: string]: any;
};
type StorageDeserializer<T, O> = (value: string, key: string, options?: O) => T;
type StorageSerializer<T, O> = (value: T, key: string, options?: O) => string;
type AnyStorageProps<A, O, T> = {
    /** a Storage-like API, e.g. localStorage */
    api?: A | A[];
    /** a function that parses the stored data after retrieval */
    deserializer?: StorageDeserializer<T, O>;
    /** a function that serializes the data before storing */
    serializer?: StorageSerializer<T, O>;
    /** options for the Storage-like API, if supported */
    options?: O;
    /** a prefix for the keys */
    prefix?: string;
    /** should the storage be synchronized via Storage events, default is `true`? */
    sync?: boolean;
    /** errors will be thrown and need to be caught in an ErrorBoundary, default is `false` */
    throw?: boolean;
};
type StringStorageProps<A, O, T = string> = AnyStorageProps<A, O, T>;
type StorageProps<T, A, O> = T extends string ? StringStorageProps<A, O> : AnyStorageProps<A, O, T>;
type StorageObject<T> = Record<string, T>;
type StorageSetter<T, O> = (key: string, value: T, options?: O) => void;
type StorageActions<T> = {
    remove: (key: string) => void;
    clear: () => void;
    error: () => Error | undefined;
    toJSON: () => {
        [key: string]: T;
    };
};
type AsyncStorage = {
    clear?: () => Promise<void> | void;
    getItem: (key: string) => Promise<string | null> | string | null;
    getAll?: () => Promise<any>;
    setItem: (key: string, value: string) => Promise<void> | void;
    removeItem: (key: string) => Promise<void> | void;
    key: (index: number) => Promise<string | null> | string | null;
    readonly length: number | undefined;
    [key: string]: any;
};
type AsyncStorageWithOptions<O> = {
    clear?: () => Promise<void> | void;
    getItem: (key: string, options?: O) => Promise<string | null> | string | null;
    getAll?: () => Promise<any>;
    setItem: (key: string, value: string, options?: O) => Promise<void> | void;
    removeItem: (key: string) => Promise<void> | void;
    key: (index: number) => Promise<string | null> | string | null;
    readonly length: number | undefined;
    [key: string]: any;
};
type AsyncStorageObject<T> = Record<string, Promise<T | null>>;
type AsyncStorageSetter<T, O> = (key: string, value: T, options?: O) => Promise<void> | void;
type AsyncStorageActions<T> = {
    remove: (key: string) => Promise<void> | void;
    clear: () => Promise<void> | void;
    error: () => Error | undefined;
    toJSON: () => Promise<{
        [key: string]: T;
    }>;
};
type StorageSignalProps<T, A, O> = StorageProps<T, A, O> & {
    /** signal equality checker */
    equals?: false | ((prev: T, next: T) => boolean);
    /** signal name used in dev mode */
    name?: string;
    internal?: boolean;
    /** should the storage be synchronized via Storage events, default is `true`? */
    sync?: boolean;
    /** errors will be thrown and need to be caught in an ErrorBoundary, default is `false` */
    throw?: boolean;
};

/**
 * like createStore, but bound to a localStorage-like API
 * ```typescript
 * type StorageWithOptions<O> = Storage; // but with options added to setItem
 * type StorageProps<T extends string, O> = {
 *   api?: Storage | StorageWithOptions;
 *   // or an array thereof, default will be localStorage
 *   deserializer?: (value: string, key: string, options?: O) => T;
 *   serializer?: (value: T, key: string, options?: O) => string;
 *   options?: O; // options
 *   prefix?: string // will be prefixed to the key
 * };
 * createStorage(props?: StorageProps) => [
 *   store: StorageObject<T>, // basically like `Store<T>`
 *   setter: StorageSetter<T>, // like `setStoreFunction<T>`
 *   actions: {
 *     remove: (key: string) => void;
 *     clear: () => void;
 *     toJSON: () => { [key: string]: T };
 *   }
 * ]
 * ```
 */
declare function createStorage<O>(props?: StringStorageProps<Storage | StorageWithOptions<O>, O>): [
    store: StorageObject<string>,
    setter: StorageSetter<string, O>,
    actions: StorageActions<string>
];
declare function createStorage<O, T>(props?: AnyStorageProps<Storage | StorageWithOptions<O>, O, T>): [store: StorageObject<T>, setter: StorageSetter<T, O>, actions: StorageActions<T>];
/**
 * like createStore, but bound to an asynchronous localStorage-like API
 * ```typescript
 * type AsyncStorage = Storage // but returns everything wrapped in Promises
 * type AsyncStorageWithOptions<O> = Storage; // but with options added to setItem
 * type AsyncStorageProps<T extends string, O> = {
 *   api?: AsyncStorage | AsyncStorageWithOptions;
 *   // or an array thereof, default will be localStorage
 *   deserializer?: (value: string, key: string, options?: O) => T;
 *   serializer?: (value: T, key: string, options?: O) => string;
 *   options?: O; // options
 *   prefix?: string // will be prefixed to the key
 * };
 * createStorage(props?: AsyncStorageProps) => [
 *   store: AsyncStorageObject<T>, // basically like `Store<T>`
 *   setter: AsyncStorageSetter<T>, // like `setStoreFunction<T>`
 *   actions: {
 *     remove: (key: string) => Promise<void>;
 *     clear: () => Promise<void>;
 *     toJSON: () => Promise<{ [key: string]: T }>;
 *   }
 * ]
 * ```
 */
declare function createAsyncStorage<O>(props?: StringStorageProps<AsyncStorage | AsyncStorageWithOptions<O>, O>): [
    store: AsyncStorageObject<string>,
    setter: AsyncStorageSetter<string, O>,
    actions: AsyncStorageActions<string>
];
declare function createAsyncStorage<O, T>(props?: AnyStorageProps<T, AsyncStorage | AsyncStorageWithOptions<O>, O>): [
    store: AsyncStorageObject<T>,
    setter: AsyncStorageSetter<T, O>,
    actions: AsyncStorageActions<T>
];
/**
 * like createSignal, but bound to a localStorage-like API
 * ```typescript
 * type StorageWithOptions<O> = Storage; // but with options added to setItem
 * type StorageProps<T extends string, O> = {
 *   api?: Storage | StorageWithOptions;
 *   // or an array thereof, default will be localStorage
 *   deserializer?: (value: string, key: string, options?: O) => T;
 *   serializer?: (value: T, key: string, options?: O) => string;
 *   options?: O; // options
 *   prefix?: string // will be prefixed to the key
 * };
 * createStorage<T extends string>(key: string, props?: StorageProps<T>) => [
 *   accessor: Accessor<T> &
 *     { error: () => Error | undefined },
 *     // basically like `value()`
 *   setter: Setter<T>, // like `setValue()`
 *   refetch: () => void // reloads from storage
 * ]
 * ```
 */
declare function createStorageSignal<T, O = {}>(key: string, initialValue?: T, props?: StorageSignalProps<T, Storage | StorageWithOptions<O>, O>): [accessor: Accessor<T | null>, setter: Setter<T | null>, refetch: () => void];
declare const createLocalStorage: typeof createStorage;
declare const createSessionStorage: <T, O = {}>(props: StorageProps<T, Storage, O>) => [store: StorageObject<string>, setter: StorageSetter<string, unknown>, actions: StorageActions<string>];

type CookieOptions = {
    domain?: string;
    expires?: Date | number | String;
    path?: string;
    secure?: boolean;
    httpOnly?: boolean;
    maxAge?: number;
    sameSite?: "None" | "Lax" | "Strict";
};
/**
 * handle cookies exactly like you would handle localStorage
 *
 * the main change is that setItem accepts the following options:
 * ```typescript
 * export type CookieOptions = {
 *   domain?: string;
 *   expires?: Date | number | String;
 *   path?: string;
 *   secure?: boolean;
 *   httpOnly?: boolean;
 *   maxAge?: number;
 *   sameSite?: "None" | "Lax" | "Strict";
 * };
 * ```
 */
declare const cookieStorage: StorageWithOptions<CookieOptions>;
/**
 * creates a reactive store but bound to document.cookie
 */
declare const createCookieStorage: <T, O = CookieOptions, A = StorageWithOptions<CookieOptions>>(props?: Omit<StorageProps<T, A, O>, "api"> | undefined) => [store: StorageObject<T>, setter: StorageSetter<T, O>, actions: StorageActions<T>];

/**
 * adds a `.clear` method to a Storage without one only using `.key`/`.removeItem`
 */
declare const addClearMethod: <S extends Storage | StorageWithOptions<any>>(storage: Omit<S, "clear"> & {
    clear?: (() => void) | undefined;
}) => S;

export { AnyStorageProps, AsyncStorage, AsyncStorageObject, AsyncStorageSetter, AsyncStorageWithOptions, CookieOptions, StorageDeserializer, StorageObject, StorageProps, StorageSerializer, StorageSetter, StorageSignalProps, StorageWithOptions, StringStorageProps, addClearMethod, cookieStorage, createAsyncStorage, createCookieStorage, createLocalStorage, createSessionStorage, createStorage, createStorageSignal };
