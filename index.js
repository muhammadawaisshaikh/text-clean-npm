function textCleaner(textRaw) {
    // Cleaning Raw Text
    var clean = textRaw.replace(/[^a-zA-Z0-9 ]/g, "");

    return clean;
  }

  module.exports = textCleaner;