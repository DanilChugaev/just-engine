import { DomInterface } from '../dom/types';
import { CanvasContext, ContextInterface } from './types';

/** Provides the context of the canvas */
export class ContextClass implements ContextInterface {
  /** Size of the field in pixels */
  private _canvasSize = 0;

  /** The ratio of the display resolution of the current device in physical pixels to the resolution in logical (CSS) pixels */
  private _devicePixelRatio = 0;

  /** Game will be drawn on this canvas */
  private _canvas: HTMLCanvasElement;

  /** Canvas 2d context */
  private _context: CanvasContext;

  /**
   * @param domInstance - allows interact with the DOM tree
   */
  constructor(
    private domInstance: DomInterface,
  ) {
    const canvas = this.domInstance.getElement('canvas');

    if (!canvas) {
      throw new Error('Failed to find a canvas.');
    }

    this._canvas = canvas as HTMLCanvasElement;
    this._context = this._canvas.getContext('2d');
  }

  /**
   * Init context instance
   *
   * @param canvasSize - size of the field in pixels
   * @param devicePixelRatio - the ratio of the display resolution
   */
  public init(canvasSize: number, devicePixelRatio: number): void {
    this._canvasSize = canvasSize;
    this._devicePixelRatio = devicePixelRatio;

    this._normalizeScale();
  }

  /** Returns canvas 2d context */
  public getInstance(): CanvasContext {
    return this._context;
  }

  /**
   * Listen to clicking on the canvas by left mouse button
   *
   * @param callback - a function that is called after clicking on the canvas by left mouse button
   */
  public listenCanvasClick(callback: () => void): void {
    this._canvas.addEventListener('click', callback);
  }

  /**
   * Listen to clicking on the canvas by right mouse button
   *
   * @param callback - a function that is called after clicking on the canvas by right mouse button
   */
  public listenCanvasContextMenu(callback: () => void): void {
    this._canvas.addEventListener('contextmenu', callback);
  }

  /** Normalize canvas styles and context scale */
  private _normalizeScale(): void {
    if (!this._canvas || !this._context) {
      return;
    }

    const ratio = this._devicePixelRatio || 1;
    const size = this._canvasSize;

    this._canvas.width = size * ratio;
    this._canvas.height = size * ratio;

    this._canvas.style.width = `${size}px`;
    this._canvas.style.height = `${size}px`;

    this._context.imageSmoothingEnabled = false;
    this._context.scale(ratio, ratio);
  }
}
