 class Product{
id:number;
desc:string;
img:string;
price:number;
star:number;
subTitle:string;
title:string;
 }
 const ProductInfo:Array<Product> = [{
        id: 1,
        desc: "营业时间 11:00 - 21:20<br>电话订购 11:00-19:00<br>网络订购 11:00-19:00",
        img: "http://localhost:8888/src/static/imgs/1.jpg",
        price: 45.5,
        star: 3,
        subTitle: "重庆 四川  麻辣火锅",
        title: "天下火锅"
    },
    {
        id: 2,
        desc: "营业时间 11:00 - 21:20<br>电话订购 11:00-19:00<br>网络订购 11:00-19:00",
        img: "http://localhost:8888/src/static/imgs/4.jpg",
        price: 45.5,
        star: 3,
        subTitle: "重庆 四川  麻辣火锅",
        title: "麻辣鱼"
    },
    {
        id: 3,
        desc: "营业时间 11:00 - 21:20<br>电话订购 11:00-19:00<br>网络订购 11:00-19:00",
        img: "http://localhost:8888/src/static/imgs/2.jpg",
        price: 45.5,
        star: 3,
        subTitle: "重庆 四川  麻辣火锅",
        title: "过桥米线"
    }
]
export default ProductInfo