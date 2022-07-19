import {
  IDom,
  TDomElementParams,
  TDomTargetElement,
  TDomListenerEventName,
  TDomCallback,
  IDomEventList,
} from './types';

/** Class allows interact with the DOM tree */
export class CDom implements IDom {
  /**
   * List with DOM event listeners
   */
  private _eventList: IDomEventList[] = [];

  /**
   * @param windowInstance - window containing a DOM document
   */
  constructor(
    private windowInstance: Window,
  ) {}

  /**
   * Add event listener to an element
   *
   * @param element - target element
   * @param eventName - event name
   * @param callback - event handler
   */
  public on(element: TDomTargetElement, eventName: TDomListenerEventName, callback: TDomCallback): void {
    element.addEventListener(eventName, callback);

    this._eventList.push({ element, eventName, callback });
  }

  /**
   * Removes event listener from an element
   *
   * @param element - target element
   * @param eventName - event name
   */
  public off(element: TDomTargetElement, eventName: TDomListenerEventName): void {
    const foundEvent = this._eventList.find((event) => event.eventName === eventName);

    if (foundEvent) {
      element.removeEventListener(foundEvent.eventName, foundEvent.callback);

      this._eventList.splice(this._eventList.indexOf(foundEvent), 1);
    }
  }

  /**
   * Create HTML element
   *
   * @param tag - name of HTML element
   * @param params - params of HTML element
   */
  public createElement(tag: string, params?: TDomElementParams): Nullable<TDomTargetElement> {
    const element = this.windowInstance.document.createElement(tag);

    if (params && Object.keys(params).length > 0) {
      for (const param in params) {
        // @ts-ignore
        element[param] = params[param];
      }
    }

    return element;
  }

  /**
   * Returns HTML element by ID
   *
   * @param id - ID of HTML element
   */
  public getElementById(id: string): Nullable<TDomTargetElement> {
    return this.windowInstance.document.getElementById(id);
  }

  /**
   * Calls a callback after loading the DOM tree
   *
   * @param callback - function that is called after loading the DOM tree
   */
  public afterLoad(callback: TDomCallback): void {
    this.on(this.windowInstance.document, 'DOMContentLoaded', callback);
  }

  /**
   * Replace or return text content of HTML element
   *
   * @param element - target HTML element
   * @param text - text for set into HTML eleemnt
   */
  public text(element: TDomTargetElement, text?: string): string | void {
    if (text === undefined) {
      return (element.textContent as string);
    }

    element.textContent = text;
  }
}
