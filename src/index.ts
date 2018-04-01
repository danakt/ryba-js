import { getSentence }                  from './sentence'
import { getStore, DictionariesTopics } from './statics/stores'
import { getItemTransformer }           from './transform'
import { transformRules }               from './statics/rules'

export = function generateRyba(...topics: DictionariesTopics[]): string {
  if (topics.length === 0) {
    return generateRyba('philosophy')
  }

  return getSentence(getStore(topics), getItemTransformer(transformRules))
}
