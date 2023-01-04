export const FilterGeneric = <U>(param2: U) => {
  const array: U[] = Array<U>()
  const filtered = array.filter((filter) => param2 === filter)
  return filtered
} 