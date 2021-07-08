export const validate = (element) => {
  // console.log(element);
  const inputLength = element.validation.minLength;
  const minAge = element.validation.minAge;
  let error = [true, ""];

  // first check if there is need for validation on the element
  if (element.validation.required) {
    const valid = element.value.trim() !== "";
    const message = `${!valid ? "This field is required" : ""}`;

    error = !valid ? [valid, message] : error;
  }

  // after xters have been entered, check if it's up to the required length
  if (inputLength) {
    const valid = element.value.length >= inputLength;
    // console.log(valid);
    const message = `${
      !valid ? `The input must be at least ${inputLength} characters long` : ""
    }`;
    error = !valid ? [valid, message] : error;
  }

  // check if the user's age is equal to or above the minAge
  if (minAge) {
    const valid = parseInt(element.value) >= minAge;
    const message = `${
      !valid ? `You must be at least ${minAge} years old` : ""
    }`;
    error = !valid ? [valid, message] : error;
  }

  return error;
};
