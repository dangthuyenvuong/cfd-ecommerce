import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Switch, Route, useRouteMatch, NavLink, useParams, useHistory, Link } from "react-router-dom";
import ListView from "./components/ListView";
import GridView from "./components/GridView";
import FilterBar from "./components/FilterBar";
import Paginate from "../../components/Paginate";
import Api from "../../helper/Api";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, loadingProduct } from "../../actions/productAction";
import { getQueryParam, convertObjToQueryURL } from "../../hooks/queryURL";
import getQueryString from "./getQueryString";



export default function Category() {
  let { url } = useRouteMatch();
  // let [categories, setCategories] = useState(null);

  const dispatch = useDispatch()
  let urlParams: any = useParams();
  let history = useHistory();

  let catID = urlParams?.cat?.replace(/[^0-9]/g, '');
  let queryUrl = getQueryString(urlParams, { remove: { view: 1 } });
  let viewGrid = getQueryString(urlParams, { data: { view: 'grid' }, remove: { categories: 1 } });
  let viewList = getQueryString(urlParams, { data: { view: 'list' }, remove: { categories: 1 } });


  useEffect(() => {
    dispatch(loadingProduct())
    Api('product' + (queryUrl ? `?${queryUrl}` : '')).get()
      .then(res => {
        dispatch(fetchProduct(res))
      })
  }, [queryUrl])




  let categories = useSelector((store: any) => store.categories).list
  const product = useSelector((state: any) => state.product)

  if (categories.length === 0) return null;

  let queryURL = getQueryParam();

  let view = queryURL.view || 'list'
  let sort = (queryURL.sort || 'price.-1')

  sort = sort.split('.')


  function sortPrice(flag: number) {
    let query = getQueryParam()
    query.sort = `price.${flag}`

    history.push({
      search: '?' + convertObjToQueryURL(query)
    })
  }


  let category: any = 'Danh sách sản phẩm'
  if (catID) {
    category = categories.find((e: any) => e.id === parseInt(catID));
    category = category.title;
  }


  return (
    <>
      <Breadcrumbs links={[
        { title: "Trang chủ", link: "/" },
        { title: category },
      ]} />
      <section className="category">
        <div className="container">
          <div className="heading">
            <h2 className="heading--title">{category}</h2>
            <div className="heading--group">
              <span className="label">Thể hiện: </span>
              <Link to={`${url}?${viewGrid}`} className={`heading--item ${view === 'grid' ? 'active' : ''}`}>
                <span>
                  <img src="/assets/icon-square.svg" alt="" />
                </span>
                <span className="type">Lưới</span>
              </Link>
              <Link to={`${url}?${viewList}`} className={`heading--item ${view === 'list' ? 'active' : ''}`}>
                <span>
                  <img src="/assets/icon-section.svg" alt="" />
                </span>
                <span className="type">Danh sách</span>
              </Link>
              <div className="heading--item">
                <span className="number">{product.paginate?.count}</span>
                <span className="type">Sản phâm</span>
              </div>
            </div>
          </div>
          <div className="filter--top">
            <div className="filter--top__group">
              <div className="filter--item">
                <div className="field">
                  <input type="radio" id="small" name="size" checked={sort[1] == -1} />
                  <label htmlFor="small" className={`radio ${sort[1] == -1 ? 'active' : ''}`} onClick={sortPrice.bind(null, -1)}>
                    Giá cao
                  </label>
                </div>
                <div className="field">
                  <input type="radio" id="big" name="size" checked={sort[1] == 1} />
                  <label htmlFor="big" className={`radio ${sort[1] == 1 ? 'active' : ''}`} onClick={sortPrice.bind(null, 1)}>
                    Giá thấp
                  </label>
                </div>
              </div>
              <div className="filter--item">
                <div className="field">
                  <input type="checkbox" id="small" name="size" />
                  <label htmlFor="small" className="checkbox">
                    Khuyến mãi nhiều
                  </label>
                  {/* <div className="nbm">nbm</div> */}
                </div>
              </div>
              <div className="filter--item">
                <div className="field">
                  <input type="checkbox" id="small" name="size" />
                  <label htmlFor="small" className="checkbox">
                    Được tin dùng
                  </label>
                  {/* <div className="nbm">nbm</div> */}
                </div>
              </div>
              <div className="filter--item">
                <div className="field">
                  <input type="checkbox" id="small" name="size" />
                  <label htmlFor="small" className="checkbox">
                    Hàng chính hãng
                  </label>
                  {/* <div className="nbm">nbm</div> */}
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
              <h3>Lọc theo:</h3>
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
