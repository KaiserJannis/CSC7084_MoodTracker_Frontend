// import axios from "axios";

async function validateSessionToken() {
  const sessionToken = sessionStorage.getItem("sessionToken");
  const userId = sessionStorage.getItem("userId");
  if ((!sessionToken && !userId) || !userId || !sessionToken) {
    //session token doesnt exist
    window.location.href = "./login.html";
    return false;
  }
  let answer = null;
  try {
    const result = await axios.get(
      "http://localhost:3000/api/checkSessionToken",
      {
        params: { sessionToken: sessionToken, userId: userId },
      }
    );
    console.log(result.data.message);
    if (result.data.success) {
      answer = true;
    } else {
      answer = false;
      //session token not valid
      window.location.href = "./login.html";
    }
  } catch (error) {
    console.log(error);
    //session token not valid
    window.location.href = "./login.html";
  }
  return answer;
}
