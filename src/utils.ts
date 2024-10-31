export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0
    const value = char === 'x' ? random : (random & 0x3) | 0x8
    return value.toString(16)
  })
}

export function setItemLocalStorage<T>(key: string, value: T): void {
  const serializedValue = JSON.stringify(value)
  localStorage.setItem(key, serializedValue)
}

export function getItemLocalStorage<T>(key: string): T | null {
  const serializedValue = localStorage.getItem(key)
  if (serializedValue === null) return null
  return JSON.parse(serializedValue) as T
}

export function removeItemLocalStorage(key: string): void {
  localStorage.removeItem(key)
}
