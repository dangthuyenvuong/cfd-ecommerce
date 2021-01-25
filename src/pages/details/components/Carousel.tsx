import { useEffect, useRef, useState } from 'react'

let script = document.createElement('script')
script.src = '/lib/flickity/flickity.pkgd.min.js'
document.body.appendChild(script)


let link = document.createElement('link')
link.rel = 'stylesheet'
link.href = '/lib/flickity/flickity.css'
document.body.appendChild(link)


const style: { [key in string]: React.CSSProperties } = {
    thumbnail_wrap: {
        display: 'flex',
        justifyContent: 'flex-start',
        padding: 3,
        flexWrap: 'wrap'
    },
    thumbnail: {
        width: '20%',
        margin: 0,
    },
    thumbnail_img: {
        maxWidth: '100%',
        objectFit: 'contain',
        height: 70,
        margin: 0,

    }
}

declare global {
    interface Window {
        Flickity: any;
        $: any
    }
}
let $ = window.$
export default function Carousel(props: any) {
    useEffect(() => {
        if ($('.carousel-detail').length > 0) {

            ref.current = $('.carousel-detail').flickity({

                wrapAround: true,
                prevNextButtons: false,
                pageDots: false,
                lazyLoad: 2,
                imagesLoaded: true,
                on: {
                    change: (index: number) => {
                        setSelected(index)
                    }
                }
            })
        }

    }, [])


    let ref: any = useRef(null)
    let thumbnail: any = useRef()
    let [selected, setSelected] = useState(0)

    function select(e: any) {

        let i = Array.from(thumbnail.current.querySelectorAll('div')).indexOf(e.currentTarget)
        setSelected(i)
        ref.current.flickity('select', i)
    }
    return (
        <div>
            <div className="carousel-detail" style={{ height: 400 }}>
                {
                    props.images?.map((e: any, i: number) => <div key={i} style={{ height: 400, width: 400 }}><img src={e.large_url} style={{ objectFit: 'contain' }} alt="" /></div>)
                }
            </div>
            <div className="thumbnail" style={style.thumbnail_wrap} ref={thumbnail}>
                {
                    props.images?.map((e: any, i: number) => <div onClick={select} key={i} style={style.thumbnail} className={`${i === selected ? 'active' : ''}`}><img style={style.thumbnail_img} src={e.large_url} alt="" /></div>)
                }
            </div>
        </div>
    )
}
