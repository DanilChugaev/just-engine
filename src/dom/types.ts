export type ElementParams = { [key: string] : string | boolean };

/** Allows interact with the DOM tree */
export interface IDom {
    /**
     * Create HTML element
     *
     * @param tag - name of HTML element
     * @param params - params of HTML element
     */
    createElement(tag: string, params?: ElementParams): Nullable<HTMLElement>;

    /**
     * Returns HTML element by ID
     *
     * @param id - ID of HTML element
     */
    getElement(id: string): Nullable<HTMLElement>;

    /**
     * Calls a callback after loading the DOM tree
     *
     * @param callback - function that is called after loading the DOM tree
     */
    afterLoad(callback: () => void): void;
}
