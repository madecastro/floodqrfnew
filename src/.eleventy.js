const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  /**
   * Nunjucks filter: {{ someDate | date("yyyy") }}
   * Supports JS Date, ISO strings, timestamps.
   * Default format is "yyyy".
   */
  eleventyConfig.addFilter("date", (value, format = "yyyy") => {
    if (!value) return "";

    // Eleventy sometimes passes Date objects, sometimes strings.
    const jsDate = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(jsDate.getTime())) return "";

    return DateTime.fromJSDate(jsDate, { zone: "utc" }).toFormat(format);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html", "json"],
  };
};
