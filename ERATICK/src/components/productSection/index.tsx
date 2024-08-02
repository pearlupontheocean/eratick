import "./style.scss";
import Line from "../subHeadLine";
import ProductColumn from "../productColumn";
import { product as ProductTypes } from "./types";


const index = () => {
  const product_list: Array<ProductTypes> = [
    {
      id: "1",
      imageSrc: 'https://miro.medium.com/max/2600/1*hqK0NO01peCMyrV47aPTpw.jpeg',
      title: "Daring Formal Wear",
      description:
        "Introducing Eratick's Daring Formal Wear, where sophistication meets audacity. Perfect for making a powerful impression, our formal wear collection features sleek suits, sharp blazers, and stylish accessories that break the mold of conventional office attire. Designed with meticulous attention to detail, our pieces offer a perfect fit and unparalleled elegance, ensuring you exude confidence and charisma at every event. Elevate your formal wardrobe and embrace the daring spirit of Eratick.",
    },
  ];
  return (
    <div className="product-section">
      <Line
        lineclass="sub-head-line-left"
        text="Our Products"
        headerclass="side-header"
      />

      <div className="products-list">
        <ProductColumn
          id="1"
          imageSrc={"https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=612x612&w=0&k=20&c=wJ6yYbRrDfdmoViuQkX39s2z_0lCiNQYgEtLU--0EbY="}
          title="Bold Streetwear Collection"
          description="Step into the spotlight with Eratick's Bold Streetwear Collection. Our streetwear line is all about making a statement with eye-catching designs, vibrant colors, and a rebellious edge. Crafted for those who aren't afraid to stand out, each piece combines comfort and style, ensuring you look and feel your best whether you're hitting the city streets or attending a casual get-together. Embrace the urban vibe and redefine your street style with Eratick."
        />

        <ProductColumn
          classname="reverse"
          id="2"
          imageSrc={'https://miro.medium.com/max/2600/1*hqK0NO01peCMyrV47aPTpw.jpeg'}
          title="Daring Formal Wear"
          description="Introducing Eratick's Daring Formal Wear, where sophistication meets audacity. Perfect for making a powerful impression, our formal wear collection features sleek suits, sharp blazers, and stylish accessories that break the mold of conventional office attire. Designed with meticulous attention to detail, our pieces offer a perfect fit and unparalleled elegance, ensuring you exude confidence and charisma at every event. Elevate your formal wardrobe and embrace the daring spirit of Eratick."
        />
      </div>
    </div>
  );
};

export default index;
