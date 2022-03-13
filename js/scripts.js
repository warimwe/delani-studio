// Business logic
function hide(shownElement, hiddenElement) {
  shownElement.click(function () {
    shownElement.hide();
    hiddenElement.show();
  });
}

function hover() {}

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

  $(".hover").hover(
    function () {
      $(".hover-text", this).slideToggle("slow");
    },
    function () {
      $(".hover-text", this).slideToggle("slow");
    }
  );

  $("form#message").submit(function (event) {
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#message").val();

    if (name && email && message) {
      alert(
        "Hey " +
          name +
          " we have received your message. Thank you for reaching out to us."
      );
    } else {
      alert("Please fill the form correctly");
    }
    event.preventDefault();
  });
});
