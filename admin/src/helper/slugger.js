export function slugger(Text) {
  return Text.toLowerCase().replace(/ /g, "-");
  // .replace(/[^\w-]+/g, "");
}
