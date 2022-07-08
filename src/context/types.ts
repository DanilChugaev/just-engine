/** Canvas context */
export type TCanvasContext = Nullable<CanvasRenderingContext2D>;

/** Provides the context of the canvas */
export interface IContext {
  init(canvasSize: number, devicePixelRatio: number): void;

  /** Returns canvas 2d context */
  getInstance(): TCanvasContext;

  /**
   * Listen to clicking on the canvas
   *
   * @param callback - a function that is called after clicking on the canvas by left mouse button
   */
  listenCanvasClick(callback: () => void): void;

  /**
   * Listen to clicking on the canvas by right mouse button
   *
   * @param callback - a function that is called after clicking on the canvas by right mouse button
   */
  listenCanvasContextMenu(callback: () => void): void;
}
