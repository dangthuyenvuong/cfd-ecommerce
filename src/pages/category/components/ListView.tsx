import React from 'react'
import CardList from '../../../components/CardList'
import { widthProduct } from '../../../hoc/withProduct';

export default function ListView(props: { product: [] }) {
    let { product } = props;
    return (
        <>
            {
                product.map((e: any) => <React.Fragment key={e._id}>{widthProduct(CardList, e)}</React.Fragment>)
            }
        </>
    )
}
