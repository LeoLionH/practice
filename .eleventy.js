module.exports= function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("css")
    return {
        passthroughFileCopy: true
  }
}