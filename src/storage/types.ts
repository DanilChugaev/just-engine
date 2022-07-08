/** Name of key in the store */
export type TStorageName = string;
/** Value in the store */
export type TStorageValue = string;

/** Stored item */
export type TStorageItem = {
    name: TStorageName;
    value: TStorageValue;
};

/** Long-term storage of game data */
export interface IStorage {
    /**
     * Saves an item to storage
     *
     * @param storageItem - stored item
     */
    save(item: TStorageItem): void;

    /**
     * Get item from storage
     *
     * @param name - name of key in the store
     */
    get(name: TStorageName): TStorageValue | null;
}
