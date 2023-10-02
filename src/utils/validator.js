import * as EmailValidator from "email-validator";

//takes in type of validation and payload. Checks for inputs validation
export const isValid = (type, payload) => {
  const stringPattern = /^[a-zA-Z\s]+$/; //validates string with spaces or letters(uppercase or lowercase)

  switch (type) {
    case "name": //name and city have same pattern to validdate. Both need to be just spaces or letters.
    case "city":
      if (payload === "") return true;
      return stringPattern.test(payload);
    case "email":
      if (payload === "") return true;
      return EmailValidator.validate(payload); //checks if the mail is valid
    default:
      return false;
  }
};
