/**
 * Превращает объект в двумерный массив вида [ключ, значение][]
 * @param  {object} obj Объект
 * @return {Array}
 */
export function toPairs<T>(obj: { [prop: string]: T }): [string, T][] {
  const keys: string[] = Object.keys(obj)

  const getKeysReducer = <T>(obj: { [prop: string]: T }) => {
    return (acc: [string, T][], value: string): [string, T][] => {
      const objectItem: T = obj[value]

      return [
        ...acc,
        [value, objectItem]
      ]
    }
  }

  const pairs: [string, T][] = keys.reduce(getKeysReducer(obj), [])

  return pairs
}

/**
 * Возвращает true или false случайным образом
 * @param {?number} [chance=0.5] Шанс выпадения true
 */
export function randomBoolean(chance: number = 1 / 2) {
  return Math.random() < chance
}

/**
 * Возвращает случайную ячейку из массива
 * @param {any[]} arr Массив
 */
export function getRandomItemFromArray<T>(arr: T[]): T {
  const randomIndex: number = Math.random() * arr.length | 0
  const randomItem: T = arr[randomIndex]

  return randomItem
}
