(function() {
  document
    .getElementsByClassName('Post-Title')[0]
    .append(
      document.getElementsByClassName('ContentItem-time')[0].cloneNode(true)
    );
})();
