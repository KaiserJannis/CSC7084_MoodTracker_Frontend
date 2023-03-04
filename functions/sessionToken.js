// import axios from "axios";

function validateSessionToken() {
  const sessionToken = sessionStorage.getItem("sessionToken");
  const userId = sessionStorage.getItem("userId");
  if ((!sessionToken && !userId) || !userId || !sessionToken) {
    //session token doesnt exist
    window.location.href = "./login.html";
    return false;
  }
  axios
    .get("http://localhost:3000/api/checkSessionToken", {
      params: { sessionToken: sessionToken, userId: userId },
    })
    .then((response) => {
      //session token valid
      // do nothing and stay at site
      return true;
      //   window.location.href = "./" + goToSite;
    })
    .catch((error) => {
      //session token not valid
      window.location.href = "./login.html";
      return false;
    });
}
