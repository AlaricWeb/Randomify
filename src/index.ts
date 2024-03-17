import FastGlob from "fast-glob";
async () => {
  const result = await FastGlob([".editorconfig", "**/index.js"]);
  console.log(result);
};
