import { IDom, ElementParams } from './types';

/** Class allows interact with the DOM tree */
export class CDom implements IDom {
  /**
   * @param windowInstance - window containing a DOM document
   */
  constructor(
    private windowInstance: Window,
  ) {}

  /**
   * Create HTML element
   *
   * @param tag - name of HTML element
   * @param params - params of HTML element
   */
  public createElement(tag: string, params?: ElementParams): Nullable<HTMLElement> {
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
  public getElement(id: string): Nullable<HTMLElement> {
    return this.windowInstance.document.getElementById(id);
  }

  /**
   * Calls a callback after loading the DOM tree
   *
   * @param callback - function that is called after loading the DOM tree
   */
  public afterLoad(callback: (event: Event) => void): void {
    this.windowInstance.document.addEventListener('DOMContentLoaded', (event: Event) => {
      callback(event);
    });
  }
}
