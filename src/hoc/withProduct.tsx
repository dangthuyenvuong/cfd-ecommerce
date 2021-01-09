import { ClassicComponent, FunctionComponent } from "react";
import { JsxElement } from "typescript";

export function widthProduct(WrapComponent: JSX.Element | any, data: any) {

    let { price, real_price, name, thumbnail_url, stock_item } = data;

    let percent = 100 - Math.round(real_price / price * 100)

    price = new Intl.NumberFormat('vn', { maximumFractionDigits: 3 }).format(price)
    console.log(new Intl.NumberFormat('vn').format(stock_item.qty))
    stock_item = Object.assign(stock_item, {})
    stock_item.qty = new Intl.NumberFormat('vn').format(stock_item.qty | 0)
    let props: any = {
        ...data,
        real_price,
        price,
        percent,
        quanty: new Intl.NumberFormat('vn').format(stock_item.qty)
    }

    return <WrapComponent {...props} />
}