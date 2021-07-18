import React, {useContext} from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { AppContext } from '../context'

const CocktailList = () => {
    const { loading, cocktails } = useContext(AppContext)

    if(loading) {
        return (
            <Loading />
        )
    }
    if(cocktails.length == 0) {
        return (
            <h2>no cocktails matched your search criteria</h2>
        )
    }
    return (
        <section className='section'>
            <h2 className='section-title'>cocktails</h2>
            <div className='cocktails-center'>
                {
                    cocktails.map(item => {
                        return <Cocktail key={item.id} {...item} />
                    })
                }
            </div>
        </section>
    )
}

export default CocktailList