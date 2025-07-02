
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("admin");
  return {
    dir: {
      input: ".",
      includes: "includes"
    }
  };
};
