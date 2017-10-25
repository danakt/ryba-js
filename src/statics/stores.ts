import {
  DictionariesStore,
  createStore,
} from 'text-generator-core'

/**
 * Импортирование словарей
 */
import adjectives       from '../dictionaries/philosophy/adjectives'
import conclusions      from '../dictionaries/philosophy/conclusions'
import gerunds          from '../dictionaries/philosophy/gerunds'
import initIntroductory from '../dictionaries/philosophy/initIntroductory'
import introductory     from '../dictionaries/philosophy/introductory'
import nouns            from '../dictionaries/philosophy/nouns'
import shortAdjectives  from '../dictionaries/philosophy/shortAdjectives'
import verbs            from '../dictionaries/philosophy/verbs'

/**
 * Хранилище словарей
 * @type {DictionariesStore}
 */
export const store: DictionariesStore = createStore({
  'прилагательное':          adjectives,
  'заключение':              conclusions,
  'деепричастие':            gerunds,
  'начальная вводная фраза': initIntroductory,
  'вводная фраза':           introductory,
  'существительное':         nouns,
  'краткое прилагательное':  shortAdjectives,
  'глагол':                  verbs,
})
