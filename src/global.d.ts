/** If true, the app is running in development mode */
declare module 'consts:IS_DEV_MODE' {
  const isDev: true | false;

  export default isDev;
}

type THexadecimalColor = string;
type TColor = THexadecimalColor;
type Nullable<T> = T | null;