import React from 'react'
import Card from './Card'

const Cards = () => {
    let products = [{ title: "iPhone 6", desc: "Download the perfect apple iphone 6 pictures. Find over 100+ of the best free apple iphone 6 images", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sisKdr4uRSMM_lD_nq8mkRK4zMSETGkOgcl5kSwpApbkfflBY3sHUsRGly3Ed1I&s=10&ec=121966422", discountRate: "30%", price: 70000, stock: "In Stock" },
    { title: "iPhone 7", desc: "Apple iPhone 7 smartphone gallery - high-resolution pictures, official photos. $ 249.99 Show all deals Apple iPhone ", img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-2.jpg", discountRate: "30%", price: 24999, stock: "Out of Stock" },
    { title: "iPhone 8", desc: "Iphone 8 wallpaper hd. Discover Pinterest's best ideas and inspiration for Iphone 8 wallpaper hd. Get inspired and try out new things", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMoGx3Gz8R9fK4ZLZYaVGvA33LJ1sYSpc0CLvZGiwg5tll1e-5n84E4I4DWS5RxKc&s=10&ec=121966422", discountRate: "30%", price: 78900, stock: "In Stock" },
    { title: "iPhone 9", desc: "Find and save ideas about iphone 9 wallpaper on Pinterest. Beautiful iOS 9 Stock Wallpaper in Ultra HD | Abstract art background, Abstract blue and Abstract ", img: "https://hamariweb.com/mobiles/LargeImages/4035_01.jpg", discountRate: "30%", price: 70000, stock: "Out of Stock" },
    { title: "iPhone 10", desc: "iPhone Wallpaper Images & Pictures. 50,000+ royalty free iPhone wallpaper in HD & 4K quality. Download these aesthetic iPhone wallpaper images today", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMeV4rVXD7jf4bKLGmtUVV0ROKHyDyxmBKiakMOIb3qNEpzd1dYovgWqkGQrRQkJf&s=10&ec=121966422", discountRate: "30%", price: 370800, stock: "In Stock" },
    { title: "iPhone 11", desc: "Apple iPhone 11 smartphone gallery - high-resolution pictures, official photos. $ 399.99 Show all deals. Black Green Yellow Purple Red White OUR PHOTOS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Xo4FjHeZkYRCBG1IOi8TNg5pLQeSUB_Yi898LHgej2vNJ19fY4zj1GmUQFyvKeHy&s=10&ec=121966422", discountRate: "30%", price: 87000, stock: "In Stock" },
    { title: "iPhone 12", desc: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg", img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg", discountRate: "30%", price: 59000, stock: "In Stock" },


    ]
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    products.map(function(product){
                        return <Card title={product.title} img={product.img} desc ={product.desc} price ={product.price}/>
                        
                    })
                }
                {/* <Card title = "Pizza" price="2500" desc ="Chicken spread with cheeze and white sauce, sprinkled with mushrooms" flavour="Chicken Fajita" img="https://i.dawn.com/primary/2026/07/031221535601890.webp"/> 
                <Card title = "Burger" price="2500" desc ="Chicken spread with cheeze and white sauce, sprinkled with mushrooms" flavour="Chicken Fajita" img="https://i.dawn.com/primary/2026/07/031221535601890.webp"/> 
                <Card title = "Sandwich" price="2500" desc ="Chicken spread with cheeze and white sauce, sprinkled with mushrooms" flavour="Chicken Fajita" img="https://i.dawn.com/primary/2026/07/031221535601890.webp"/> 
                <Card title = "Broast" price="2500" desc ="Chicken spread with cheeze and white sauce, sprinkled with mushrooms" flavour="Chicken Fajita" img="https://i.dawn.com/primary/2026/07/031221535601890.webp"/>  */}
                {/* Card(title,desc,price,flavour) */}
                
            </div>
        </div>
    )
}

export default Cards
