import { generateSentence, DictionariesStore, SentenceElement, DictionaryItem } from 'text-generator-core'
import { toPairs } from 'ramda'
import * as templates from './statics/templates'
import { transformRules } from './statics/rules'
import { getStore } from './statics/stores'
import { getRandomItemFromArray } from './utils'
import { getItemTransformer, TansformRules } from './transform'

/**
 * Создаёт функцию получения случайного шаблона
 * @param  {Array} sentenceCreatorsList Список гетеров шаблонов
 * @return {Function}
 */
const createSentenceGetter = function createSentenceGetter(
  sentenceCreatorsList: [
    string,
    (store: DictionariesStore) => SentenceElement
  ][]
) {
  return function getTemplate(store: DictionariesStore): SentenceElement {
    const randomSentenceCreator = getRandomItemFromArray(sentenceCreatorsList)
    const sentenceTempalte: SentenceElement = randomSentenceCreator[1](store)

    return sentenceTempalte
  }
}

/**
 * Возвращает случайный шаблон предложения
 * @param  {DictionariesStore} store Хранилище словарей
 * @return {SentenceElement}
 */
const getTemplate: (store: DictionariesStore) => SentenceElement = (
  createSentenceGetter(
    toPairs({ ...templates })
  )
)

/**
 * Генерирует предложение по шаблону
 * @param {DictionariesStore} store       Храниище словарей
 * @param {Function}          transformer Функция для трансформации
 *   зависимых элементов
 */
export const getSentence = function getSentence(
  store: DictionariesStore,
  transformer: (
    props: { [prop: string]: string },
    target: DictionaryItem,
  ) => DictionaryItem
) {
  const sentenceTemplate: SentenceElement = getTemplate(store)
  const sentence: string = generateSentence(sentenceTemplate, transformer)

  return sentence
}

for (let i = 0; i < 100; i++) {
  console.log(getSentence(getStore(), getItemTransformer(transformRules)))
}
