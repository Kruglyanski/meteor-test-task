import React from 'react'

export const Products = ({products}) => {

    return (
        <div>
            <h2>Products</h2>
            <ol>
                {products.map(
                    p => <li key={p.id}>
                        {p.Name}
                    </li>
                )}
            </ol>
        </div>
    )
}
