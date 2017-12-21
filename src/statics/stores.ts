import { createStore, DictionariesStore, DictionaryItem } from 'text-generator-core'
import { mapObject } from '../utils'

/**
 * Типы тем
 */
type DictionariesTopics = 'mathematics' | 'philosophy'
type DictionariesTopicsDefault = 'default' | DictionariesTopics

/**
 * Подгружает и возвращает словари по тематике
 * @param {string} topic Тема
 */
export function loadStore(
  topic: DictionariesTopicsDefault
): DictionariesStore {
  const types = [
    ['прилагательное',          'adjectives'],
    ['заключение',              'conclusions'],
    ['деепричастие',            'gerunds'],
    ['начальная вводная фраза', 'initIntroductory'],
    ['вводная фраза',           'introductory'],
    ['существительное',         'nouns'],
    ['краткое прилагательное',  'shortAdjectives'],
    ['глагол',                  'verbs'],
  ]

  const dictionariesReducer = function dictionariesReducer(
    topic:  string,
    acc:    { [type: string]: any[] },
    type:   string[],
  ) {
    return {
      ...acc,
      [type[0]]: require(`../dictionaries/${topic}/${type[1]}`).default
    }
  }

  const dictionaries: { [type: string]: any[] } = types.reduce(
    dictionariesReducer.bind(null, topic),
    {},
  )

  const store: DictionariesStore = createStore(dictionaries)
  return store
}

/**
 * Комбинирование словарей в хранилищах
 * @param  {...DictionariesStore} list Список хранилищ для комбинирования
 * @return {DictionariesStore}
 */
export function combineStores(...list: DictionariesStore[]): DictionariesStore {
  const dictionariesReducer = function dictionariesReducer(
    acc:  DictionariesStore,
    dict: DictionariesStore,
  ): DictionariesStore {
    const mapperOfStore = function mapperOfStore(
      dict:  DictionariesStore,
      value: DictionaryItem[],
      key: string
    ): DictionaryItem[] {
      return {
        ...value,
        ...dict[key],
      }
    }

    return mapObject(mapperOfStore.bind(dict), acc)
  }

  const dictionaries: DictionariesStore = list.reduce(
    dictionariesReducer,
    {} as DictionariesStore
  )

  return dictionaries
}

/**
 * Возвращает храниоища по указанным темам
 * @param  {string[]} topics Список тем
 * @return {DictionariesStore}
 */
export function getStore(
  topics: DictionariesTopics[] = ['philosophy']
): DictionariesStore {
  const topicsWithdefault: DictionariesTopicsDefault[] = ['default', ...topics]
  const dictionariesList = topicsWithdefault.map(item => loadStore(item))

  return combineStores(...dictionariesList)
}
