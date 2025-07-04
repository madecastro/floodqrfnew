module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addTransform("preserveScripts", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return content.replace("<script ", "<script ");
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};