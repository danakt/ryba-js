import { expect } from 'chai'
import { toPairs, randomBoolean, getRandomItemFromArray, mapObject } from '../src/utils'

/**
 * Превращение объекта в двумерный массив вида [ключ, значение][]
 * @function toPairs
 */
describe('Превращение объекта в массив', () => {
  it('Сравнение массива и результата превращения объекта', () => {
  const testObject = {
      param1: 'value',
      param2: 1337,
      param3: Symbol.for('somesymbol')
    }

    const mockArray = [
      ['param1', 'value'],
      ['param2', 1337],
      ['param3', Symbol.for('somesymbol')],
    ]

    expect(toPairs(testObject)).to.deep.eq(mockArray)
  })
})

/**
 * Получение случайного логическго значения
 * @function randomBoolean
 */
describe('Получение случайного логическго значения', () => {
  it('Проверка типа', () => {
    expect(typeof randomBoolean()).to.eq('boolean')
  })

  it('Проверка энтропии', () => {
    const iterationNumber = 1e5

    const result: any = {
      true: 0,
      false: 0,
    }

    for (let i = 0; i < iterationNumber; i++) {
      result[randomBoolean().toString()]++
    }

    expect(result.true).to.gt(iterationNumber * 0.4)
    expect(result.false).to.gt(iterationNumber * 0.4)
  })
})

/**
 * Получение случайного значения из массива
 * @function getRandomItemFromArray
 */
describe('Получение случайного значения из массива', () => {
  it('Наличие значения в массиве', () => {
    const arr: any[] = [1, true, '123', {}]

    // Пробуем 100 итераций
    for (let i = 0; i < 1e3; i++) {
      expect(arr.indexOf(getRandomItemFromArray(arr))).to.not.eq(-1)
    }
  })
})

/**
 * Маппинг объекта
 * @function mapObject
 */
describe('Маппинг объекта', () => {
  it('Возведение в квадрат каждого значения объекта', () => {
    const targetObj = {
      q: 1, w: 2, e: 5, r: 512, t: -200, y: -Infinity
    }

    const mockObj = {
      q: 1, w: 4, e: 25, r: 262144, t: 40000, y: Infinity
    }

    expect(mapObject(item => item ** 2, targetObj)).to.deep.eq(mockObj)
  })
})
