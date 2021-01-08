import React from 'react'
import { NavLink } from 'react-router-dom';
import { widthProduct } from '../hoc/withProduct'


export default function Card(props: { price: any, real_price: any, name: string, thumbnail_url: string, percent: number }) {

    let { price, real_price, name, thumbnail_url, percent } = props;

    return (
        <div className="card">
            <NavLink to="/" className="card--head">
                <img src={thumbnail_url} alt="" />
                {
                    percent > 0 && (
                        <div className="card--percent">
                            <span>-{percent}%</span>
                        </div>
                    )
                }

            </NavLink>
            <div className="card--body">
                <h2 className="card--title">
                    <NavLink to="/">{name}</NavLink>
                </h2>
                {/* <h3 className="card--desc">
                
                </h3> */}
                <div className="card--footer">
                    <div className="card--price">
                        {real_price} vnđ
                    </div>
                    {
                        percent > 0 && (
                            <div className="card--price-promotion">
                                {price}
                            </div>
                        )
                    }

                    {/* <div className="btn btn-buy">
                        <span>Buy Now</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
