import { expect } from 'chai'
import { loadStore, combineStores } from '../src/statics/stores'

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
    ].sort((a, b) => a > b ? 1 : -1)

    expect(Object.keys(store).sort((a, b) => a > b ? 1 : -1)).to.deep.eq(dictionariesList)

    for (let item of dictionariesList) {
      expect(Array.isArray(store[item])).to.be.true
    }
  })
})

/**
 * Комбинирование словарей
 * @function combineStores
 */
describe('Комбинирование хранилищ словарей', () => {
  it('Комбинирование хранилищ «default» и «philosophy»', () => {
    const generalStore    = loadStore('default')
    const philosophyStore = loadStore('philosophy')

    const combinedStore = combineStores(generalStore, philosophyStore)
    console.log(combinedStore);

  })
})
