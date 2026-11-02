import { slugify } from "./strings.js";

export function titleSlug(title, id) {
  return `${slugify(title)}-${id}`;
}
