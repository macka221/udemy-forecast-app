export function nowToHHMM() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes().toString().padStart(2, 0);

  return `${hours}:${minutes} `;
}

