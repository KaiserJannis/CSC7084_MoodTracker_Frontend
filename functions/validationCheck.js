function validationCheck(form, submitForm) {
  if (!typeof submitForm === "function") {
    console.log("submitForm is not a function");
  }
  form.addEventListener("submit", async function (event) {
    event.preventDefault(); //prevent from emediatly submitting
    event.stopPropagation();
    const form_data = new FormData(form);
    const dataOld = Object.fromEntries(form_data);
    const data = {
      username: dataOld.username,
      password: dataOld.password,
    };
    let emailValid = false;
    if (form_data.has("email")) {
      data.email = await dataOld.email;
      emailValid = await validateEmail(
        data.email,
        form.querySelector('[name="email"]')
      );
    }
    const usernameValid = await validateUsername(
      data.username,
      form.querySelector('[name="username"]')
    );
    const passwordValid = await validatePassword(
      data.password,
      form.querySelector('[name="password"]')
    );

    if (usernameValid && passwordValid) {
      if (form_data.has("email")) {
        if (emailValid) {
          await submitForm(data, form);
          return true;
        } else {
          console.log("input email data was not valid");
        }
      } else {
        await submitForm(data, form);
        return true;
      }
    } else {
      console.log("input data was not valid");
    }
    // form.classList.add("was-validated");
    return false;
  });
}

async function validateUsername(input, field) {
  const regex = /^[a-zA-Z0-9_]{5,}$/;
  // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{5,20}$/;
  //  ^: Start of the string.
  // (?=.*[a-z]): Positive lookahead assertion for at least one lowercase letter.
  // (?=.*[A-Z]): Positive lookahead assertion for at least one uppercase letter.
  // (?=.*\d): Positive lookahead assertion for at least one number.
  // (?=.*[^\w\s]): Positive lookahead assertion for at least one special character.
  // .{8,20}: Match any character between 5 and 20 times.
  // $: End of the string.
  const message =
    "Username has to have at least 5 characters and no special characters";

  if (!regex.test(input)) {
    await field.setCustomValidity(message);
    await setErrorMessages(false, field);
    return false;
  }
  await field.setCustomValidity("");
  await setErrorMessages(true, field);
  return true;
}
async function validatePassword(input, field) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const message =
    "Password has to be minimum 8 characters and contains at least one lowercase letter, one uppercase letter, one number, and one special character";

  if (!regex.test(input)) {
    await field.setCustomValidity(message);
    await setErrorMessages(false, field);
    return false;
  }
  await field.setCustomValidity("");
  await setErrorMessages(true, field);
  return true;
}
async function validateEmail(input, field) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const message = "Please enter a valid email address";
  if (!regex.test(input)) {
    await field.setCustomValidity(message);
    await setErrorMessages(false, field);
    return false;
  }
  await field.setCustomValidity("");
  await setErrorMessages(true, field);
  return true;
}
async function setErrorMessages(value, inputField) {
  const error = inputField.parentNode.querySelector(".invalid-feedback");
  inputField.form.classList.add("was-validated");
  if (value === false) {
    //get the input error element
    error.textContent = inputField.validationMessage;
    inputField.classList.add("is-invalid");
    return false;
  } else {
    error.textContent = "";
    inputField.classList.remove("is-invalid");
    return true;
  }
}
