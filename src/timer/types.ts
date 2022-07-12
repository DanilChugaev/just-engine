// TODO: добавить тип интервала (милисекунды, секунды, минуты, часы)
export type TTimerInterval = number; // изначально в ms

export type TTimerIteration = number;

export interface ITimerSettings {
  interval: TTimerInterval;
}

/** Counting equal intervals of time */
export interface ITimer {
  /**
   * Init timer instance
   *
   * @param settings - timer params
   */
  init(settings: ITimerSettings): void;

  /**
   * Start counting time
   *
   * @param callback - a function that is called after a specified time interval has passed
   */
  start(callback: (iteration: TTimerIteration) => void): void;

  /**
   * Stop counting time
   */
  stop(): TTimerIteration;

  /**
   * Clears the counted time
   */
  clear(): void;
}