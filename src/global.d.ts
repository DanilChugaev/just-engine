/** If true, the app is running in development mode */
declare module 'consts:IS_DEV_MODE' {
  const isDev: true | false;

  export default isDev;
}

type HexadecimalColor = string;
type Color = HexadecimalColor;
type Nullable<T> = T | null;