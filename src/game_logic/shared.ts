
export function clamp (number: number, min: number, max: number) {
  return Math.min(Math.max(number, min), max)
}

export function mapIncr<K> (map: Map<K, number>, key: K, value = 1) {
  const current = map.get(key)
  if (current === undefined) {
    map.set(key, value)
  } else {
    map.set(key, current + value)
  }
}
