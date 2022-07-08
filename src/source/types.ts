/** To interact with the file system */
export interface ISource {
    /**
     * Returns image file
     *
     * @param name - image file name
     */
    getImage(name: string): CanvasImageSource;
}
