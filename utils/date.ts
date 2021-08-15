export function parseTime(date: string, timezone: string) {
  return new Date(date).toLocaleString('ru-RU', {
    timeZone: timezone,
    minute: '2-digit',
    hour: 'numeric',
    hour12: false,
  })
}

export function diffBetweenDatesInMinutes(
  dateStart: Date,
  dateEnd: Date,
): number {
  const diffTime = dateEnd.getTime() - dateStart.getTime()
  return Math.ceil(diffTime / (1000 * 60))
}
