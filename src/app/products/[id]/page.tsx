import Container from "@/components/container/Container";
import React from "react";
import TopButtons from "../components/topButtons/TopButtons";
import ProductInfo from "../components/productInfo/ProductInfo";
import Image from "next/image";

const ProductDetails = () => {
  return (
    <main>
      <section className="w-full min-h-screen pt-28 pb-32 bg-secondary-200">
        <Container>
          <TopButtons />
          <div className="flex flex-col md:flex-row gap-10 pb-10">
            <div className="w-full md:w-auto h-[300px] md:h-auto md:flex-1 md:flex justify-center">
              <div className="md:w-[80%] h-full relative">
                <Image
                  fill
                  src="https://slot.ng/media/catalog/product/cache/7cc17357a06f829e544a54ed5a492e71/i/p/iphone_13_1_1_1.jpg"
                  alt="Product image"
                  className="object-contain"
                />
              </div>
            </div>
            <ProductInfo />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ProductDetails;
