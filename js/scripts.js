// Business logic
function hide(shownElement, hiddenElement) {
  shownElement.click(function () {
    shownElement.hide();
    hiddenElement.show();
  });
}

// function

// UI logic
$(document).ready(function () {
  var designIcon = $("#design-icon");
  var designParagraph = $("#design-paragraph");
  var developmentIcon = $("#development-icon");
  var developmentParagraph = $("#development-paragraph");
  var productIcon = $("#product-icon");
  var productParagraph = $("#product-paragraph");

  hide(designIcon, designParagraph);
  hide(designParagraph, designIcon);

  hide(developmentIcon, developmentParagraph);
  hide(developmentParagraph, developmentIcon);

  hide(productIcon, productParagraph);
  hide(productParagraph, productIcon);

  $("form#message").submit(function (event) {
    event.preventDefault();
  });
});
