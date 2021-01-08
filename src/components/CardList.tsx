import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { NavLink } from "react-router-dom";

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
    right: -25,
    top: 2
  }
}

export default function CardList(props: { price: any, real_price: any, name: string, thumbnail_url: string, percent: number, rating_average: number, stock_item: any, loading?: boolean }) {
  let { price, real_price, name, thumbnail_url, percent, rating_average, stock_item, loading } = props;

  return (
    <div className="card--list">
      {
        loading ? <Skeleton variant="rect" animation="wave" width={160} height={200} /> : <NavLink to="/" className="card--image">
          <img src={thumbnail_url} alt="" />
          {
            percent > 0 && <span className="card--percent">-{percent}%</span>
          }
        </NavLink>
      }

      <div className="card--details">
        {
          loading ? <Skeleton variant="rect" height={50} style={{ marginBottom: 10 }} /> : (
            <h2 className="title"><NavLink to="/">{name}</NavLink></h2>
          )
        }

        {/* <div className="desc">Space for a small product description</div> */}
        {
          loading ? <Skeleton variant="rect" width="50%" /> : (
            <div className="start--group" style={style.rating}>
              <div className="rating-value" style={{ ...style.ratingValue, width: `${rating_average / 5 * 100}%` }}></div>
              <span style={style.ratingNumber}>{rating_average}</span>

            </div>
          )
        }

        <div className="details">
          <ul className="left">
            {
              loading ? <Skeleton variant="rect" width={100} height={15} style={{ marginTop: 10 }} /> : (
                <li>
                  <span>Fresheness</span>
                </li>
              )
            }
            {
              loading ? <Skeleton variant="rect" width={100} height={15} style={{ marginTop: 10 }} /> : (
                <li>
                  <span>Farm</span>
                </li>
              )
            }
            {
              loading ? <Skeleton variant="rect" width={100} height={15} style={{ marginTop: 10 }} /> : (
                <li>
                  <span>Delivery</span>
                </li>
              )
            }
            {
              loading ? <Skeleton variant="rect" width={100} height={15} style={{ marginTop: 10 }} /> : (
                <li>
                  <span>Còn lại</span>
                </li>
              )
            }



          </ul>
          <ul className="right">
            {
              loading ? <Skeleton variant="rect" width={100} height={15} style={{ marginTop: 10 }} /> : (
                <li>
                  <span>
                    <span className="green">New</span> (Extra fresh)
                  </span>
                </li>
              )
            }
            {
              loading ? <Skeleton variant="rect" width={100} height={15} style={{ marginTop: 10 }} /> : (
                <li>
                  <span>Grocery Tarm Fields</span>
                </li>
              )
            }
            {
              loading ? <Skeleton variant="rect" width={100} height={15} style={{ marginTop: 10 }} /> : (
                <li>
                  <span>Europe</span>
                </li>
              )
            }
            {
              loading ? <Skeleton variant="rect" width={100} height={15} style={{ marginTop: 10 }} /> : (
                <li>
                  <span className="green">{stock_item?.qty}</span>
                </li>
              )
            }



          </ul>
        </div>
      </div>
      <div className="card--price">
        {
          loading ? <Skeleton variant="rect" height="50" style={{ marginBottom: 10 }} /> : (
            <div className="card--price__top">
              <p className="price">{real_price} vnđ</p>
              {
                percent > 0 && <p className="discount">{price}</p>
              }

            </div>
          )
        }
        {
          loading ? <Skeleton variant="text" /> : (
            <div className="card--price__mid">
              <p>Miễn phí giao hàng</p>
              <p>Gia hàng trong 1 ngày</p>
            </div>
          )
        }

        <div className="card--price__bot">
          {
            loading ? <><Skeleton variant="text" width="100%" /><Skeleton variant="text" width="100%" /></> : (
              <NavLink to="/" className="btn btn-buy">
                <span>Chi tiết</span>
                <img src="/assets/right-white.svg" alt="" />
              </NavLink>
            )
          }

          {
            loading ? <Skeleton variant="rect" width="100%" height={20} style={{ marginTop: 10 }} /> : (
              <div className="btn--more">
                <img src="/assets/icon-heart.svg" alt="" />
                <span>Thêm vào yêu thích</span>
              </div>
            )
          }


        </div>
      </div>
    </div>
  );
}
