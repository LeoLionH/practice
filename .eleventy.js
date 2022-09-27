const markdownIt = require("markdown-it");
const md = new markdownIt({
  html: true,
});

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });
  eleventyConfig.addCollection("experiences", function(collectionApi) {
    return collectionApi.getFilteredByGlob("cv/experiences/*.md").sort((a,b) => {
      if (a.data.order > b.data.order) return 1;
      else if (a.data.order < b.data.order) return -1;
      else return 0;
    })
  });
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("css");
  return {
    passthroughFileCopy: true
  }  
}

