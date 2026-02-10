/**
 * Global helpers available in Nunjucks templates via `helpers`.
 *
 * Purpose:
 * Avoid depending on a custom Nunjucks `date` filter (which can break builds
 * if the Eleventy config file isn’t present/loaded).
 */

function toDate(value) {
  if (!value) return null;
  if (value instanceof Date) return value;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d;
}

module.exports = {
  /** Returns the current year at build time (e.g., 2026). */
  currentYear() {
    return new Date().getFullYear();
  },

  /**
   * Formats a date into a human-friendly string (e.g., “January 1, 2024”).
   * Uses Intl.DateTimeFormat (no extra dependencies).
   */
  formatDate(value, locale = "en-US", options = { year: "numeric", month: "long", day: "numeric" }) {
    const d = toDate(value);
    if (!d) return "";
    try {
      return new Intl.DateTimeFormat(locale, options).format(d);
    } catch (e) {
      // Fallback: ISO YYYY-MM-DD
      return d.toISOString().split("T")[0];
    }
  },
};
