import { toSlug } from "./strings.js";

export function titleSlug(title, id) {
  return `${toSlug(title)}-${id}`;
}
