import Container from "@/components/container/Container";
import Product from "@/components/product/Product";
import React from "react";
const products = [
  {
    id: 1,
    brand: "Apple",
    price: "900",
    cat: "Phone",
    color: ["Blue", "Silver"],
    title: "Apple iPhone 13 512GB Single Sim",
    desc: "The iPhone 13’s brighter display, longer battery life, and powerful cameras make it the best iPhone for the money. The new iPhone’s display is brighter than its predecessors. The battery life is longer. And Apple has improved an already",
    img: "https://slot.ng/media/catalog/product/cache/7cc17357a06f829e544a54ed5a492e71/i/p/iphone_13_1_1_1.jpg",
  },
  {
    id: 2,
    brand: "Apple",
    price: "1200",
    cat: "Phone",
    color: ["White", "Silver"],
    title: "Apple iPhone 14 Pro 128GB Single Sim",
    desc: "The iPhone 13’s brighter display, longer battery life, and powerful cameras make it the best iPhone for the money. The new iPhone’s display is brighter than its predecessors. The battery life is longer. And Apple has improved an already",
    img: "https://slot.ng/media/catalog/product/cache/7cc17357a06f829e544a54ed5a492e71/9/5/95_3.jpg",
  },
  {
    id: 3,
    brand: "Apple",
    price: "400",
    cat: "Headphone",
    color: ["pink"],
    title: "Pink headphone",
    desc: "Beats by Dr. Dre Beats Solo3 Wireless On-Ear Headphones (Rose Gold / Icon)",
    img: "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/beats_by_dr_dre_mx442ll_a_solo3_wireless_headphones_1572449234_1512400.jpg",
  },
  {
    id: 4,
    brand: "Apple",
    price: "560",
    cat: "Headphone",
    color: ["White", "Black"],
    title: "Whie headphone",
    desc: "Beats by Dr. Dre Beats Solo3 Wireless On-Ear Headphones (Rose Gold / Icon)",
    img: "https://cdn.mos.cms.futurecdn.net/zsKB9MX9rSBdNhJ4De9GmK-970-80.jpg.webp",
  },
];

const LatestProducts = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="">
          <h2 className="text-3xl mb-2 capitalize">Latest Products</h2>
          <div className=" flex justify-between items-center">
            {products.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LatestProducts;
