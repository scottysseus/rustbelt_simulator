/**
 * Takes an `array` of nonprimitives and replaces the `oldItem` with the `newItem`.
 * Prints an assertion when the `oldItem` can't be found or is found multiple times.
 */
export function replaceOne<T1 extends object, T2 extends T1> (array: ReadonlyArray<T1>, oldItem: T1, newItem: T2): ReadonlyArray<T1> {
  const indexes = array.flatMap((v, i) => v === oldItem ? i : [])
  console.assert(indexes.length === 1)
  return [...array].splice(indexes[0], 1, newItem)
}
