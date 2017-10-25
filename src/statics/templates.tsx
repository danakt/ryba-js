/**
 * Шаблоны предложений
 */
import { createElement }                          from 'text-generator-core'
import { DictionariesStore, SentenceElement }     from 'text-generator-core'
import { randomBoolean, getRandomItemFromArray }  from '../utils'

/**
 * ?Прил сущ ?ввод (глаг | дееприч, глаг | глаг и глаг) сущ ?закл.
 */
export const template0 = (store: DictionariesStore): SentenceElement => (
  <sentence>
    {randomBoolean(1 / 3) &&
      <fragment>
         <word for="word1" type="прилагательное" store={store}/>
      </fragment>
    }

    <fragment><word id="word1" type="существительное" store={store}/></fragment>

    {randomBoolean(1 / 3) &&
      <fragment>, <word type="вводная фраза" store={store}/>,</fragment>
    }

    {randomBoolean(1 / 7) &&
      (
        <fragment>
          , <word type="деепричастие" store={store}/>,
          <word type="глагол" store={store}/>
        </fragment>
      ) || getRandomItemFromArray([
        <fragment><word type="глагол" store={store}/></fragment>,
        (
          <fragment>
            <word type="глагол" store={store}/>
            и <word type="глагол" store={store}/>
          </fragment>
        ),
      ])
    }

    <fragment>
      <word type="существительное"
        store={store}
        props={{ 'падеж': 'дательный' }}/>
    </fragment>

    {randomBoolean(1 / 15) &&
      <fragment>
        <word type="заключение" store={store}/>
      </fragment>
    }

    <fragment>.</fragment>
  </sentence>
)

/**
 * ?(НачВвод | Ввод) ?прил сущ (глаг | дееприч, глаг | глаг и глаг) сущ ?закл.
 */
export const template1 = (store: DictionariesStore): SentenceElement => (
  <sentence>
    {randomBoolean(1 / 3) && getRandomItemFromArray([
      <fragment><word type="начальная вводная фраза" store={store}/></fragment>,
      (
        <fragment>
          <word type="вводная фраза" store={store}/>,
        </fragment>
      )
    ])}

    {randomBoolean(1 / 3) &&
      <fragment>
        <word for="word1" type="прилагательное" store={store}/>
      </fragment>
    }

    <fragment>
      <word id="word1" type="существительное" store={store}/>
    </fragment>

    {randomBoolean(1 / 7) &&
      (
        <fragment>
          , <word type="деепричастие" store={store}/>,
          <word type="глагол" store={store}/>
        </fragment>
      ) || getRandomItemFromArray([
        <fragment><word type="глагол" store={store}/></fragment>,
        (
          <fragment>
            <word type="глагол" store={store}/>
            и <word type="глагол" store={store}/>
          </fragment>
        ),
      ])
    }

    <fragment>
      <word type="существительное"
        store={store}
        props={{ 'падеж': 'дательный' }}/>
    </fragment>

    {randomBoolean(1 / 15) &&
      <fragment>
        <word type="заключение" store={store}/>
      </fragment>
    }

    <fragment>.</fragment>
  </sentence>
)

/**
 * ?Ввод ?прил сущ краткПрил.
 */
export const template2 = (store: DictionariesStore): SentenceElement => (
  <sentence>
    {randomBoolean(1 / 10) && getRandomItemFromArray([
      'Но',
      <fragment>
        <word type="вводная фраза" store={store}/>
      </fragment>
    ])}

    {randomBoolean() &&
      <fragment>
        <word type="прилагательное" store={store} for="noun"/>
      </fragment>
    }

    <fragment>
      <word type="существительное" store={store} id="noun"/>
    </fragment>

    <fragment>
      <word type="краткое прилагательное" store={store} for="noun"/>
    </fragment>

    <fragment>.</fragment>
  </sentence>
)
