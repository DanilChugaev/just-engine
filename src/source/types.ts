/** To interact with the file system */
export interface ISource {
    /**
     * Returns image file
     *
     * @param path - path to image file
     */
    getImage(path: string): CanvasImageSource;
}
