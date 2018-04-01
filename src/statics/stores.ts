import { reduce, map }                    from 'ramda'
import { createStore, DictionariesStore } from 'text-generator-core'

/**
 * Типы тем
 */
export type DictionariesTopics = 'mathematics' | 'philosophy'
type DictionariesTopicsWithDefault = 'default' | DictionariesTopics

/**
 * Подгружает и возвращает словари по тематике
 * @param {string} topic Тема
 */
export const loadStore = function loadStore(
  topic: DictionariesTopicsWithDefault
): DictionariesStore {
  const types = [
    ['прилагательное', 'adjectives'],
    ['заключение', 'conclusions'],
    ['деепричастие', 'gerunds'],
    ['начальная вводная фраза', 'initIntroductory'],
    ['вводная фраза', 'introductory'],
    ['существительное', 'nouns'],
    ['краткое прилагательное', 'shortAdjectives'],
    ['глагол', 'verbs']
  ]

  const dictionariesReducer = (topic: string) => (
    acc: { [type: string]: any[] },
    type: string[]
  ) => ({
    ...acc,
    [type[0]]: require(`../dictionaries/${topic}/${type[1]}`).default
  })

  const dictionaries: { [type: string]: any[] } = reduce(
    dictionariesReducer(topic),
    {},
    types
  )

  const store: DictionariesStore = createStore(dictionaries)
  return store
}

/**
 * Комбинирование словарей в хранилищах
 * @param  {...DictionariesStore} list Список хранилищ для комбинирования
 * @return {DictionariesStore}
 */
export const combineStores = function combineStores(
  ...list: DictionariesStore[]
): DictionariesStore {
  const combinedDictionary: DictionariesStore = reduce(
    (acc: DictionariesStore, storeToMerge: DictionariesStore) => {
      const mergedStore = { ...acc }

      for (const item in storeToMerge) {
        if (!storeToMerge.hasOwnProperty(item)) {
          continue
        }

        mergedStore[item] = [
          ...(mergedStore[item] || []),
          ...storeToMerge[item]
        ]
      }

      return mergedStore
    },
    {} as DictionariesStore,
    list
  )

  return combinedDictionary
}

/**
 * Возвращает хранилища по указанным темам
 * @param  {string[]} topics Список тем
 * @return {DictionariesStore}
 */
export const getStore = function getStore(
  topics: DictionariesTopics[] = ['philosophy']
): DictionariesStore {
  const topicsWithDefault: DictionariesTopicsWithDefault[] = [
    'default',
    ...topics
  ]
  const dictionariesList: DictionariesStore[] = map(
    item => loadStore(item),
    topicsWithDefault
  )

  return combineStores(...dictionariesList)
}
