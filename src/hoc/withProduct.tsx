import { ClassicComponent, FunctionComponent } from "react";
import { JsxElement } from "typescript";

export function widthProduct(WrapComponent: JSX.Element | any, data: any) {

    let { price, real_price, name, thumbnail_url } = data;

    let percent = 100 - Math.round(real_price / price * 100)

    price = new Intl.NumberFormat('vn', { maximumFractionDigits: 3 }).format(price)
    real_price = new Intl.NumberFormat('vn').format(real_price)

    let props = {
        ...data,
        real_price,
        price,
        percent
    }

    return <WrapComponent {...props} />
}