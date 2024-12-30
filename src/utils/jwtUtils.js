export function parseJwt(token) {
  if (!token) return null;
  const base64Url = token.split('.')[1];
  // base64Url -> base64
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  // Декодирование base64 -> строка JSON
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((char) => {
        return '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
  // Превращаем строку JSON в объект
  return JSON.parse(jsonPayload);
}
