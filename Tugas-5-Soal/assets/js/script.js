function displayUsername() {
  let username = localStorage.getItem("username");
  if (username) {
    $("#navbar-btn, #btn-login").hide();
    $("#navbar-btn, #btn-register").hide();
    let parentElement = document.getElementById("navbar-btn");
    parentElement.setAttribute("style", "color: white; cursor:pointer;");
    let result = parentElement.insertAdjacentHTML(
      "afterbegin",
      `<h5>${username}</h5>`
    );
    $("#navbar-btn").append(result);
  }
}

$(document).on("click", "#navbar-btn h5", function () {
  $(".btn-logout").toggle();
});

$(document).on("click", ".btn-logout", function () {
  localStorage.removeItem("username");
  $("#navbar-btn #btn-register, #navbar-btn #btn-login").show();
  $("#navbar-btn h5, .btn-logout").remove();
});

displayUsername();

$("#login-form").submit(function (e) {
  e.preventDefault();
  let username = $("#username").val();
  localStorage.setItem("username", username);
  displayUsername();
});
