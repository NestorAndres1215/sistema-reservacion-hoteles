export function decodeToken(token) {
  try {
    const payload = token.split(".")[1];
    const decoded = JSON.parse(atob(payload));
    return decoded;
  } catch {
    return null;
  }
}

export function isTokenExpired(token) {
  const decoded = decodeToken(token);
  if (!decoded?.exp) return true;

  // exp viene en segundos, Date.now() en milisegundos
  return decoded.exp * 1000 < Date.now();
}