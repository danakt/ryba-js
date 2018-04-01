declare type DictionariesTopics = 'mathematics' | 'philosophy'

declare function ryba(...topics: DictionariesTopics[]): string

export as namespace ryba
export = ryba
