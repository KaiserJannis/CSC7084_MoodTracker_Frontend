const logout_button = document.getElementById("logout_button");
logout_button.addEventListener("click", function () {
  console.log("logging out now...");
  debugger;
  axios
    .post("http://localhost:3000/api/logout", {
      sessionToken: sessionStorage.getItem("sessionToken"),
      userId: sessionStorage.getItem("userId"),
    })
    .then((response) => {
      console.log(response);
      window.sessionStorage.removeItem("sessionToken");
      window.sessionStorage.removeItem("userId");
      window.location.href = "./login.html";
    })
    .catch((error) => {
      console.log(error);
      console.error(error);
    });
});
