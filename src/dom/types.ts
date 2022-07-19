export type TDomElementParams = { [key: string] : string | boolean };

export type TDomTargetElement = HTMLElement | Document;

export type TDomListenerEventName = string;

export type TDomCallback = (event: Event) => void;

export interface IDomEventList {
    element: TDomTargetElement,
    eventName: TDomListenerEventName,
    callback: TDomCallback,
}

/** Allows interact with the DOM tree */
export interface IDom {
    /**
     * Add event listener to an element
     *
     * @param element - target element
     * @param eventName - event name
     * @param callback - event handler
     */
    on(element: TDomTargetElement, eventName: TDomListenerEventName, callback: TDomCallback): void;

    /**
     * Removes event listener from an element
     *
     * @param element - target element
     * @param eventName - event name
     */
    off(element: TDomTargetElement, eventName: TDomListenerEventName): void;

    /**
     * Create HTML element
     *
     * @param tag - name of HTML element
     * @param params - params of HTML element
     */
    createElement(tag: string, params?: TDomElementParams): Nullable<TDomTargetElement>;

    /**
     * Returns HTML element by ID
     *
     * @param id - ID of HTML element
     */
    getElementById(id: string): Nullable<TDomTargetElement>;

    /**
     * Calls a callback after loading the DOM tree
     *
     * @param callback - function that is called after loading the DOM tree
     */
    afterLoad(callback: TDomCallback): void;

    /**
     * Replace or return text content of HTML element
     *
     * @param element - target HTML element
     * @param text - text for set into HTML eleemnt
     */
    text(element: TDomTargetElement, text?: string): string | void;
}
