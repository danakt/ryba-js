/**
 * Возвращает true или false случайным образом
 * @param  {?number} [chance=0.5] Шанс выпадения true
 * @return {boolean}
 */
export function randomBoolean(chance: number = 1 / 2) {
  return Math.random() < chance
}

/**
 * Возвращает случайную ячейку из массива
 * @param {any[]} arr Массив
 */
export function getRandomItemFromArray<T>(arr: T[]): T {
  const randomIndex: number = (Math.random() * arr.length) | 0
  const randomItem: T = arr[randomIndex]

  return randomItem
}
