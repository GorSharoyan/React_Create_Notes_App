export function genreateRandomID() {
  return String(
    Math.random(1)
      .toString(36)
      .replace(`/[^a-z]+/g`, "")
      .replace(".", "")
      .substr(0, 5)
  );
}
