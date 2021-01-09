import React from "react";
import TabReviews from './TabReviews'
export default function ProductDetails(props: any) {
  console.log(props)
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="product--image">
          {
            props.images?.map((e: any) => <img key={e.thumbnail_url} src={e.large_url} alt="" />)
          }
        </div>
      </div>
      <div className="col-md-6">
        <div className="product--details">
          <h2 className="title">{props.name}</h2>
          <div className="star--group">
            <img src="/assets/icon-star.svg" alt="" />
            <img src="/assets/icon-star.svg" alt="" />
            <img src="/assets/icon-star.svg" alt="" />
            <img src="/assets/icon-star.svg" alt="" />
            <img src="/assets/icon-star-none.svg" alt="" />
            <span>(1 customer review)</span>
          </div>
          <p className="desc">
            {props.short_description}
          </p>
          <div className="product--wrap__info">
            <div className="content">
              <div className="name-wrap">
                <span className="name">SKU:</span>
                <span className="name">Category</span>
                <span className="name">Stock:</span>
                <span className="name">Farm</span>
              </div>
              <div className="info">
                <span>{props.sku}</span>
                <span>Vegetables</span>
                <span className="green">In Stock</span>
                <span>Grocery Tarm Fields</span>
              </div>
            </div>
            <div className="content">
              <div className="name-wrap">
                <span className="name">Freshness:</span>
                <span className="name">In Stock</span>
                <span className="name">Buy by:</span>
                <span className="name">Delivery:</span>
              </div>
              <div className="info">
                <span>1 days old</span>
                <span>pcs, kgs, box, pack</span>
                <span>in 2 days</span>
                <span>Czech republic</span>
              </div>
            </div>
          </div>
          <div className="product--wrap__btn">
            <div className="price--group">
              <span className="price">{props.real_price} VNĐ</span>
              {
                props.percent > 0 ? <>
                  <span className="discount">{props.price} VNĐ</span>
                  <span className="discount-percent">-{props.percent}%</span>
                </> : null
              }

            </div>
            <div className="btn--group">
              <div className="quantity">
                <span className="btn--increase">+</span>
                <span>0</span>
                <span className="btn--decrease">-</span>
              </div>
              <div className="btn btn-buy">
                <img src="/assets/icon-add.svg" alt="" />
                <span>Add to cart</span>
              </div>
            </div>
          </div>
          <div className="wish--list">
            <img src="/assets/icon-heart-organe.svg" alt="" />
            <span>Add to wish list</span>
          </div>
          <TabReviews />
        </div>
      </div>
    </div>
  );
}
