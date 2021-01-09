import React from 'react'
import { NavLink } from 'react-router-dom'
import Banner from './Banner'
import Filter from './Filter'

export default function CategoryMenu() {
    return (
        <>
            <section className="section">
                <div className="wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <Filter>
                                    <h2 className="filter--title">Category menu</h2>
                                    <ul className="filter--link">
                                        <li> <a href="#">Bakery</a></li>
                                        <li> <a href="#">Fruit and vegetables</a></li>
                                        <li> <a href="#">Meat and fish</a></li>
                                        <li> <a href="#">Drinks</a></li>
                                        <li> <a href="#">Kitchen</a></li>
                                    </ul>
                                    <NavLink to="/the-loai/" className="btn btn--more">
                                        <span>More categories</span>
                                        <span className="right">
                                            <img src="/assets/icon-right.svg" alt="" />
                                        </span>
                                    </NavLink>
                                </Filter>
                            </div>
                            <div className="col-md-9 banner--wrap">
                                <Banner />
                                <Banner />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
