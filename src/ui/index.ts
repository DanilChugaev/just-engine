import IS_DEV_MODE from 'consts:IS_DEV_MODE';

import { UIInterface, CustomProperties } from './types';

/** Class to control the UI in the game */
export class UIClass implements UIInterface {
  /** An object that is a CSS declaration block, and exposes style information and various style-related methods and properties */
  private _rootStyles: CSSStyleDeclaration;

  /** Variables from `:root` declaration */
  private _customProperties: CustomProperties = {};

  /** Color variables from custom properties */
  private _colors: CustomProperties = {};

  /** Main font in the game */
  private _font = '';

  /**
   * @param windowInstance - window containing a DOM document
   * @param arrayInstance - main Array object
   */
  constructor(
    private windowInstance: Window,
    private arrayInstance: ArrayConstructor,
  ) {
    this._init();
  }

  /**
   * Returns custom properties from `:root` declaration
   */
  public get getCustomProperties(): CustomProperties {
    return this._customProperties;
  }

  /**
   * Returns color variables from custom properties
   */
  public get getColors(): CustomProperties {
    return this._colors;
  }

  /**
   * Get font family
   */
  public get getFont(): string {
    return this._font;
  }

  /**
   * Set properties
   */
  private _init(): void {
    this._rootStyles = this.windowInstance.getComputedStyle(this.windowInstance.document.documentElement);

    this._setCustomProperties();
    this._setColors();
    this._setFont();
  }

  /**
   * Set custom properties from :root
   */
  private _setCustomProperties(): void {
    this._customProperties = {};

    const customPropertiesValues = this.arrayInstance.from(this._rootStyles).filter(style => style.indexOf('--') === 0);

    customPropertiesValues.forEach(prop => {
      // --custom-properties -> CUSTOM_PROPERTIES
      this._customProperties[
        prop.split('-')
          .filter(item => item.length !== 0)
          .map(item => item.toUpperCase())
          .join('_')] = this._rootStyles.getPropertyValue(prop);
    });
  }

  /**
   * Set colors from custom properties
   */
  private _setColors(): void {
    for (const key in this._customProperties) {
      if (key.indexOf('COLOR') >= 0) {
        this._colors[key] = this._customProperties[key];
      }
    }

    if (IS_DEV_MODE) {
      console.log(this._colors);
    }
  }

  /**
   * Set font family from custom properties
   */
  private _setFont(): void {
    if (this._customProperties['FONT_FAMILY']) {
      this._font = this._customProperties['FONT_FAMILY'];
    }
  }
}