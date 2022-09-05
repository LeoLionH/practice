const markdownIt = require("markdown-it");
const md = new markdownIt({
  html: true,
});

module.exports= function (eleventyConfig) {
  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("css")
  return {
    passthroughFileCopy: true
  }
}