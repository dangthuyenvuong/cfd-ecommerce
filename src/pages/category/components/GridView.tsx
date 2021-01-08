import React from 'react'
import Card from '../../../components/Card'
import { widthProduct } from '../../../hoc/withProduct'

export default function GridView(props: { product: [] }) {
    let { product } = props
    return (
        <div className="row">
            {
                product.map((e: any) => <div className="col-md-4" key={e.id}>
                    {widthProduct(Card, e)}
                </div>)
            }
        </div>
    )
}
