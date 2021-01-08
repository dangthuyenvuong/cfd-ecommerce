import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Switch, Route, useRouteMatch, NavLink, useParams, useHistory } from "react-router-dom";
import ListView from "./components/ListView";
import GridView from "./components/GridView";
import FilterBar from "./components/FilterBar";
import Paginate from "../../components/Paginate";
import Api from "../../helper/Api";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../actions/productAction";
import { getQueryParam, convertObjToQueryURL } from "../../hooks/queryURL";
export default function Category() {
  let { url } = useRouteMatch();
  // let [categories, setCategories] = useState(null);

  const dispatch = useDispatch()
  let urlParams: any = useParams();
  let history = useHistory();

  let catID = urlParams?.cat?.replace(/[^0-9]/g, '');


  useEffect(() => {
    Api('product' + (catID ? `?categories=${catID}` : '')).get()
      .then(res => {
        dispatch(fetchProduct(res))
      })
  }, [catID])

  let categories = useSelector((store: any) => store.categories).list
  const product = useSelector((state: any) => state.product)

  if (categories.length === 0) return null;

  let view = getQueryParam().view || 'list'


  function sortPrice(flag: number) {
    let query = getQueryParam()
    query.sort = `price.${flag}`

    history.push({
      pathname: window.location.pathname,
      search: '?' + convertObjToQueryURL(query)
    })
  }
  return (
    <>
      <Breadcrumbs links={[
        { title: "Homepage", link: "/" },
        { title: "Category" },
      ]} />
      <section className="category">
        <div className="container">
          <div className="heading">
            <h2 className="heading--title">Fruit and vegetables</h2>
            <div className="heading--group">
              <NavLink to={`${url}?view=grid`} className="heading--item">
                <span>
                  <img src="/assets/icon-square.svg" alt="" />
                </span>
                <span className="type">Grid view</span>
              </NavLink>
              <NavLink exact to={`${url}?view=list`} className="heading--item">
                <span>
                  <img src="/assets/icon-section.svg" alt="" />
                </span>
                <span className="type">List view</span>
              </NavLink>
              <div className="heading--item">
                <span className="number">117</span>
                <span className="type">Products</span>
              </div>
            </div>
          </div>
          <div className="filter--top">
            <div className="filter--top__group">
              <div className="filter--item">
                <div className="field">
                  <input type="radio" id="small" name="size" />
                  <label htmlFor="small" className="radio" onClick={sortPrice.bind(null, 1)}>
                    Giá cao
                  </label>
                </div>
                <div className="field">
                  <input type="radio" id="big" name="size" defaultChecked />
                  <label htmlFor="big" className="radio" onClick={sortPrice.bind(null, -1)}>
                    Giá thấp
                  </label>
                </div>
              </div>
              <div className="filter--item">
                <div className="field">
                  <input type="checkbox" id="small" name="size" />
                  <label htmlFor="small" className="checkbox">
                    Giao nhanh
                  </label>
                  <div className="nbm">nbm</div>
                </div>
              </div>
              <div className="filter--item">
                <div className="field">
                  <input type="checkbox" id="small" name="size" />
                  <label htmlFor="small" className="checkbox">
                    Chính hãng
                  </label>
                  <div className="nbm">nbm</div>
                </div>
              </div>
              <div className="filter--item">
                <div className="field">
                  <input
                    type="checkbox"
                    id="small"
                    name="size"
                    defaultChecked
                  />
                  <label htmlFor="small" className="checkbox">
                    Filter
                  </label>
                  <div className="nbm">12</div>
                  <div className="select">
                    <span className="title">Select</span>
                    <span className="arrow">
                      <img src="/assets/icon-right.svg" alt="" />
                    </span>
                    {/* <select name="" id="">

                                            </select> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="filter--top__applied">
              <h3>Applied filters:</h3>
              <div className="selected--group">
                <span className="selected--item">Selected Filter</span>
                <span className="selected--item">Selected Filter</span>
              </div>
            </div>
          </div>
          <div className="category--main">
            <div className="row">
              <div className="col-md-3">
                <FilterBar categories={categories} />
              </div>
              <div className="col-md-9 products">
                {
                  view === 'grid' ? <GridView product={product.list} /> :
                    <ListView product={product.list} />
                }
                <Paginate {...product.paginate} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
