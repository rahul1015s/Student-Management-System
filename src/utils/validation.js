export function validateStudent({ name, email, course }) {
  if (!name || !email || !course) return false;
  return /\S+@\S+\.\S+/.test(email);
}
