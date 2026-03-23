const formValidator = (email, password, name = "") => {
  // Must contain @, a domain, and a valid TLD (e.g. user@example.com)
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Min 8 chars, at least 1 uppercase, 1 lowercase, 1 digit, 1 special character
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  if (name == "") return "Full Name cannot be empty";
  if (!emailRegEx.test(email)) return "Invalid email address.";
  if (!passwordRegex.test(password))
    return "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character.";
  return null;
};

export default formValidator;
