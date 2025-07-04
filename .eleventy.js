module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};