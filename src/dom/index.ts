import { DomInterface } from './types';

/** Class allows interact with the DOM tree */
export class DomClass implements DomInterface {
  /**
   * @param windowInstance - window containing a DOM document
   */
  constructor(
    private windowInstance: Window,
  ) {}

  /**
   * Create HTML element
   *
   * @param name - name of HTML element
   */
  public createElement(name: string): Nullable<HTMLElement> {
    return this.windowInstance.document.createElement(name);
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