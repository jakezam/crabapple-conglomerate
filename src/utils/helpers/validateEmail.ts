export function validateEmail(emailAddress) {
  return /\S+@\S+\.\S+/.test(emailAddress);
}
