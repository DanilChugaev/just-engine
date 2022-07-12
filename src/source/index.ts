import { ISource } from './types';

/** To interact with the file system */
export class CSource implements ISource {
  /**
   * @param ImageProvider - returns image object
   */
  constructor(
    private ImageProvider: typeof Image,
  ) {}

  /**
   * Returns image file
   *
   * @param path - path to image file
   */
  public getImage(path: string): CanvasImageSource {
    const img = new this.ImageProvider();

    img.src = path;

    return img;
  }
}
