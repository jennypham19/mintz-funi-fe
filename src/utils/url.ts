// fill data to pattern's params
export const prepareRealPath = (
  pattern: string = '',
  params: Record<string, string | number> = {},
) => {
  let path = pattern;

  Object.keys(params).forEach((key) => {
    const value = params[key]?.toString();
    path = path.replace(`:${key}`, value);
  });

  return path;
};

//Get url image
const apiBaseUrl = import.meta.env.MODE === "development" ? 'http://localhost:3002/api' : 'https://mintz-funi-be.onrender.com/api'
export function getPathImage(path: string) : string {
  if(!path){
    return "";
  }
  return `${apiBaseUrl.replace(/\/$/, '')}${path}`
}