export type TCustomProperties = { [key: string] : string };

export interface IUI {
  /**
   * Returns custom properties from :root declaration
   */
  get getCustomProperties(): TCustomProperties;

  /**
   * Returns color variables from custom properties
   */
  get getColors(): TCustomProperties;

  /**
   * Returns font family from custom properties
   */
  get getFont(): string;
}