declare type DictionariesTopics = 'mathematics' | 'philosophy'

declare function ryba(...topics: DictionariesTopics[]): string

declare namespace ryba {

}
export = ryba
