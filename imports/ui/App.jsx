import React, {useEffect, useState} from 'react'
import {Products} from './Products'
import {remote} from '../api/remote'
import {PASSWORD, USERNAME} from '../../config/config'

export const App = () => {

    const [products, setProducts] = useState([])
    const [prodReact, setProdReact] = useState(null)

    useEffect(() => {

        (async () => {

            await remote.connect()

            console.log('connected!')

            await remote.login({
                password: PASSWORD,
                user: {
                    username: USERNAME
                }
            })

            const sub = remote.subscribe('products')
            await sub.ready()

            const prodReact = remote.collection('products').reactive()
            setProdReact(prodReact)

            const products = prodReact.data()
            setProducts([...products].reverse())

        })()

    }, [])

    useEffect(() => {

        prodReact && prodReact.onChange((newData) => {
            console.log('new user state', newData)
            setProducts([...newData].reverse())
        })

    }, [prodReact])

    return (
        <div>
            <Products products={products}/>
        </div>
    )
}

