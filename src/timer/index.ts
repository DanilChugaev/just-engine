import { ITimer, ITimerSettings, TTimerIteration } from './types';

import { INITIAL_ITERATION_VALUE } from './constants';

/** Counting equal intervals of time */
export class CTimer implements ITimer {
  /** Timer params */
  private _settings: ITimerSettings;

  /** Unique timer id */
  private _timerId: number;

  /** Number of passed iterations */
  private _iteration: TTimerIteration = INITIAL_ITERATION_VALUE;

  /**
   * @param windowInstance - window containing a DOM document
   */
  constructor(
    private windowInstance: Window,
  ) {}

  /**
   * Init timer instance
   *
   * @param settings - timer params
   */
  public init(settings: ITimerSettings): void {
    this._settings = settings;
  }

  /**
   * Start counting time
   *
   * @param callback - a function that is called after a specified time interval has passed
   */
  public start(callback: (iteration: TTimerIteration) => void): void {
    this._timerId = this.windowInstance.setInterval(() => {
      callback(++this._iteration);
    }, this._settings.interval);
  }

  /**
   * Stop counting time
   */
  public stop(): TTimerIteration {
    this.windowInstance.clearInterval(this._timerId);

    return this._iteration;
  }

  /**
   * Clears the counted time
   */
  public clear(): void {
    this._iteration = INITIAL_ITERATION_VALUE;
  }
}