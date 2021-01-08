import React from "react";

const style: { [key in string]: React.CSSProperties } = {
  rating: {
    background: 'url(/assets/icon-star-none.svg) repeat-x',
    height: 20,
    width: 85,
    position: 'relative'
  },
  ratingValue: {
    background: 'url(/assets/icon-star-black.svg) repeat-x',
    height: 20,
    position: 'absolute',
    backgroundSize: 17,

  },
  ratingNumber: {
    position: 'absolute',
    right: -25
  }
}

export default function CardList(props: { price: any, real_price: any, name: string, thumbnail_url: string, percent: number, rating_average: number, stock_item: any }) {
  let { price, real_price, name, thumbnail_url, percent, rating_average, stock_item } = props;

  return (
    <div className="card--list">
      <div className="card--image">
        <img src={thumbnail_url} alt="" />
      </div>
      <div className="card--details">
        <h2 className="title">{name}</h2>
        {/* <div className="desc">Space for a small product description</div> */}
        <div className="start--group" style={style.rating}>
          <div className="rating-value" style={{ ...style.ratingValue, width: `${rating_average / 5 * 100}%` }}></div>
          <span style={style.ratingNumber}>{rating_average}</span>

        </div>
        <div className="details">
          <ul className="left">
            <li>
              <span>Fresheness</span>
            </li>
            <li>
              <span>Farm</span>
            </li>
            <li>
              <span>Delivery</span>
            </li>
            <li>
              <span>Còn lại</span>
            </li>
          </ul>
          <ul className="right">
            <li>
              <span>
                <span className="green">New</span> (Extra fresh)
              </span>
            </li>
            <li>
              <span>Grocery Tarm Fields</span>
            </li>
            <li>
              <span>Europe</span>
            </li>
            <li>
              <span className="green">{stock_item?.qty}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="card--price">
        <div className="card--price__top">
          <p className="price">{real_price} vnđ</p>
          <p className="discount">{price}</p>
        </div>
        <div className="card--price__mid">
          <p>Miễn phí giao hàng</p>
          <p>Gia hàng trong 1 ngày</p>
        </div>
        <div className="card--price__bot">
          <div className="btn btn-buy">
            <span>Chi tiết</span>
            <img src="/assets/right-white.svg" alt="" />
          </div>
          <div className="btn--more">
            <img src="/assets/icon-heart.svg" alt="" />
            <span>Thêm vào yêu thích</span>
          </div>
        </div>
      </div>
    </div>
  );
}
