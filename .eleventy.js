module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};