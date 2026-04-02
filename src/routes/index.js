import { parseRoutePath } from "../utils/parseRoutePath.js";
import { tickets } from "./tickets.js";

export const routes = [...tickets].map((routes) => ({
  ...routes,
  path: parseRoutePath(routes.path),
}));
