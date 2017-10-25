import { toPairs }        from './utils'
import { DictionaryItem } from 'text-generator-core'

/**
 * Типы правил трансформации
 */
export type TansformRule  = [
  RegExp,
  { [value: string]: string }
] | [
  RegExp,
  { [value: string]: string },
  { [prop: string]: any }
]
export type TansformRules = { [prop: string]: TansformRule[] }

/**
 * Возвращает функция для трансформации элементов
 * @param  {TansformRules} transformRules Правила трансформации
 * @return {Function}
 */
export function getItemTransformer(transformRules: TansformRules) {
  /**
   * Трансформирует элементы
   * @param  {object}         props  Параметры трансформации
   * @param  {DictionaryItem} target Трансформируемый элемент
   * @return {DictionaryItem}
   */
  return function transformItem(
    props:  { [prop: string]: string },
    target: DictionaryItem,
  ): DictionaryItem {
    const propsArr: [string, any][] = toPairs(props)

    const getPropsReducer = (transformRules: TansformRules) => {
      return (acc: DictionaryItem, prop: [string, string]): DictionaryItem => {
        const [ propname, value ]: string[] = prop

        const getRuleReducer = (value: string) => {
          return (acc: DictionaryItem, rule: TansformRule): DictionaryItem => {

            const [ regExpr, { [value]: replacer } ] = rule
            const targetRules: { [prop: string]: any } | undefined = rule[2]

            if (targetRules != null) {
              // TODO: to fp
              for (let prop in targetRules) {
                if (targetRules[prop] !== acc[1][prop]) {
                  return acc
                }
              }
            }

            return [
              acc[0].replace(regExpr, replacer),
              acc[1],
              acc[2],
            ]
          }
        }

        return transformRules[propname].reduce(getRuleReducer(value), acc)
      }
    }

    const outItem = propsArr.reduce(
      getPropsReducer(transformRules),
      target,
    ) as DictionaryItem

    return outItem
  }
}
