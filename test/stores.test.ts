import { expect }                   from 'chai'
import { map, mapObjIndexed }       from 'ramda'
import { loadStore, combineStores } from '../src/statics/stores'
import { DictionariesStore }        from 'text-generator-core'

/**
 * Подгрузка словрей
 * @function loadStore
 */
describe('Подгрузка словрей', () => {
  it('Подгрузка словаря «philosophy»', () => {
    const store = loadStore('philosophy')

    const dictionariesList: string[] = [
      'вводная фраза',
      'глагол',
      'деепричастие',
      'заключение',
      'краткое прилагательное',
      'начальная вводная фраза',
      'прилагательное',
      'существительное'
    ].sort((a, b) => (a > b ? 1 : -1))

    expect(Object.keys(store).sort((a, b) => (a > b ? 1 : -1))).to.deep.eq(
      dictionariesList
    )

    for (const item of dictionariesList) {
      if (dictionariesList.hasOwnProperty(item)) {
        expect(Array.isArray(store[item])).to.be.true
      }
    }
  })
})

/**
 * Комбинирование словарей
 * @function combineStores
 */
describe('Комбинирование хранилищ словарей', () => {
  it('Комбинирование хранилищ «default» и «philosophy»', () => {
    type LengthMap = { [name: string]: number }

    const defaultStore: DictionariesStore = loadStore('default')
    const defaultStoreLengthMap: LengthMap = map(
      item => item.length,
      defaultStore
    )

    const philosophyStore: DictionariesStore = loadStore('philosophy')
    const philosophyStoreLengthMap: LengthMap = map(
      item => item.length,
      philosophyStore
    )

    const combinedStoreLengthMap: LengthMap = mapObjIndexed(
      (value: number, key: string): number => {
        return defaultStoreLengthMap[key] + philosophyStoreLengthMap[key]
      },
      { ...defaultStoreLengthMap, ...philosophyStoreLengthMap }
    )

    // Комбинирование
    const combinedStore = combineStores(defaultStore, philosophyStore)

    // Попытка сравнить карты размеров хранилищ библиотек
    expect(map(item => item.length, combinedStore)).to.deep.eq(
      combinedStoreLengthMap
    )
  })
})
