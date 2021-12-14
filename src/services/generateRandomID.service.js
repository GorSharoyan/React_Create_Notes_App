export function genreateRandomID() {
  return Math.random()
    .toString(36)
    .replace(`/[^a-z]+/g`, "")
    .replace(".", "")
    .substr(0, 5);
}
