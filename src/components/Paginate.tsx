import React from 'react'

export default function Paginate(props: { totalPage: number, count: number, currentPage: number, nextPage?: number, previousPage?: number }) {
    let { totalPage, count, currentPage, nextPage, previousPage } = props;
    return (
        <div className="paginate">
            <div className="paginate--wrap">
                <h3 className="page">Trang :</h3>
                <ul className="page--wrap">
                    <li><a href="#" className="page-numbers">1</a></li>
                    <li><a href="#" className="page-numbers">2</a></li>
                    <li><a href="#" className="page-numbers current">3</a></li>
                    <li><a href="#" className="page-numbers">4</a></li>
                </ul>
            </div>
            <div className="total">
                <span className="number">{count}</span>
                Sản phẩm
            </div>
        </div>
    )
}
