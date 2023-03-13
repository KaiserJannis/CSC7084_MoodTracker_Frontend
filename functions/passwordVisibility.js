function password_visibility() {
  var x = document.getElementById("password_input");
  // console.log("1: " + x.type);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  // console.log("2: " + x.type);
  var icon_visibility = document.getElementById("password_visible_icon");
  if (!icon_visibility.classList.contains(".active")) {
    icon_visibility.classList.add(".active");
    icon_visibility.innerHTML = icon_white;
  } else {
    icon_visibility.classList.remove(".active");
    icon_visibility.innerHTML = icon_black;
  }
  // console.log("but: " + icon_visibility.classList);
}
