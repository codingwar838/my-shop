import Container from "@/components/container/Container";
import Product from "@/components/product/Product";
import React from "react";
const phones = [
  {
    id: 10,
    title: "iPhone 14 Pro Max",
    desc: "iPhone 14 Pro Max. Capture incredible detail with a 48MP Main camera. Experience iPhone in a whole new way with Dynamic Island and Always-On display",
    color: ["gold", "silver"],
    category: "Phone",
    brand: "Apple",
    cat: "Phones",
    price: "1400$",
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZw01Vkl3ym4twu5be4A_4KISV_kaPL_vmqjK_M2dJZYhnWOTDJIzbf8NouudgXKm51ySeNcwtWYDVbZH9DHZscdeZSHmRtfSy8V-Y4-QY6mQ-Dy7NqVUKy-QC-hTD_RYa56XLbcUUHPxm&usqp=CAc",
  },
  {
    id: 11,
    title: "iPhone 13 Pro Max",
    desc: "Apple IPhone 13 Pro 6.1 Inch Super Retina XDR Display With ProMotion",
    color: ["blue", "gold", "silver"],
    category: "Phone",
    brand: "Apple",
    cat: "Phones",
    price: "1000$",
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/978048/1.jpg?6376",
  },
  {
    id: 12,
    title: "Tecno Camon 20",
    desc: "Tecno Camon 20 Pro 5G - 256GB ROM - 8GB ",
    color: ["blue", "gold", "silver"],
    category: "Phone",
    brand: "Techno",
    cat: "Phones",
    price: "600$",
    img: "https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon20/black.png",
  },
  {
    id: 13,
    title: "iPhone 11 Pro Max",
    desc: "Apple IPhone 11 6.1-Inch Liquid Retina LCD (4GB RAM,64 GB ROM) IOS 13",
    color: ["blue", "gold", "silver"],
    category: "Phone",
    brand: "Apple",
    cat: "Phone",
    price: "1800$",
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/5744401/1.jpg?7031",
  },
];

const Phones = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-3xl mb-2 capitalize">Phones</h2>
        <div className="flex justify-between gap-5">
          {phones.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Phones;
