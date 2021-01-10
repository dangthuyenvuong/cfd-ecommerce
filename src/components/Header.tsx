import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { openCart } from "../actions/cartAction";

export default function Header() {
  const categories = useSelector((state: any) => state.categories).list
  const cart = useSelector((state: any) => state.cart)
  const dispatch = useDispatch()

  let menus = [
    {
      title: 'Khuyến mãi',
      slug: 'khuyen-mai'
    },
    {
      title: 'Được mua nhiều',
      slug: 'mua-nhieu'
    },
    {
      title: 'Mới nhất',
      slug: 'moi-nhat'
    },
    {
      title: 'Hấp dẫn',
      slug: 'hap-dan'
    },
    {
      title: 'Quà tặng',
      slug: 'qua-tang'
    },
    {
      title: 'Chính sách',
      slug: 'chinh-sach'
    }
  ]

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header--top">
            <ul className="contact">
              <li>Chat with us</li>
              <li>+420 336 775 664</li>
              <li>info@freshnesecom.com</li>
            </ul>
            <ul className="about">
              <li>Blog</li>
              <li>About us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="header--mid">
            <Link className="logo" to="/">
              <img src="/assets/logo.svg" alt="logo" />
            </Link>
            <div className="search">
              <div className="search-category">
                <div className="head">
                  <span className="title">All categories</span>
                  <span className="arrow">
                    <img src="/assets/icon-down.svg" alt="" />
                  </span>
                </div>
              </div>
              <input
                className="search-input"
                type="text"
                placeholder="Search products, categories..."
              />
              <div className="search-icon">
                <img src="/assets/icon-search.svg" alt="search" />
              </div>
            </div>
            <div className="info">
              <Link className="user" to="/dang-nhap">
                <img src="/assets/icon-user.svg" alt="user" />
              </Link>
              <div className="cart" onClick={dispatch.bind(null, openCart())} >
                <img src="/assets/icon-cart.svg" alt="cart" />
                {
                  cart.list.length > 0 && <span className="number">{cart.list.length}</span>
                }

              </div>
            </div>
          </div>
          <div className="header--bottom">
            <ul className="wrap">
              {
                menus.map((e: any, i) => (
                  <li key={i}>
                    <NavLink to={`/category/${e.slug}`} className="title">{e.title}</NavLink>
                    {/* <span>
                      <img src="/assets/icon-down.svg" alt="" />
                    </span> */}
                  </li>
                ))
              }

              {/* <li>
                <span className="title">Fruit and vegetables</span>
                <span>
                  <img src="/assets/icon-down.svg" alt="" />
                </span>
              </li>
              <li>
                <span className="title">Meat and fish</span>
                <span>
                  <img src="/assets/icon-down.svg" alt="" />
                </span>
              </li>
              <li>
                <span className="title">Drinks</span>
                <span>
                  <img src="/assets/icon-down.svg" alt="" />
                </span>
              </li>
              <li>
                <span className="title">Kitchen</span>
                <span>
                  <img src="/assets/icon-down.svg" alt="" />
                </span>
              </li>
              <li>
                <span className="title">Special nutrition</span>
                <span>
                  <img src="/assets/icon-down.svg" alt="" />
                </span>
              </li>
              <li>
                <span className="title">Baby</span>
                <span>
                  <img src="/assets/icon-down.svg" alt="" />
                </span>
              </li>
              <li>
                <span className="title">Pharmacy</span>
                <span>
                  <img src="/assets/icon-down.svg" alt="" />
                </span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
