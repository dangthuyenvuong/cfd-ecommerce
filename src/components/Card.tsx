import React from 'react'
import { widthProduct } from '../hoc/withProduct'


export default function Card(props: { price: any, real_price: any, name: string, thumbnail_url: string, percent: number }) {

    let { price, real_price, name, thumbnail_url, percent } = props;

    return (
        <div className="card">
            <div className="card--head">
                <img src={thumbnail_url} alt="" />
                <div className="card--percent">
                    <span>- {percent} %</span>
                </div>
            </div>
            <div className="card--body">
                <h2 className="card--title">
                    {name}
                </h2>
                {/* <h3 className="card--desc">
                
                </h3> */}
                <div className="card--footer">
                    <div className="card--price">
                        {real_price} vnđ
                    </div>
                    <div className="card--price-promotion">
                        {price}
                    </div>
                    {/* <div className="btn btn-buy">
                        <span>Buy Now</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
