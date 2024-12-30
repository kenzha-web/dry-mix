export const formatDate = (date) => {
  if (!date || isNaN(new Date(date))) {
    return "Неизвестная дата"; // Текст по умолчанию, если дата некорректна
  }
  return new Date(date).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: 'numeric',
    minute: 'numeric',
  });
};

export function formatDateForComments(str) {
  const date = new Date(str);
  return new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
  }).format(date);
}
