export function getDate () {
  return new Date().toLocaleString('en', { month: 'long', weekday: 'long', day: 'numeric' })
}
