import Line from "../subHeadLine";
import "./style.scss";
import SideImage from "../../assets/images/fl11.png";

const index = () => {
  return (
    <div className="about-section">
      <div className="text-box">
        <Line
          lineclass="sub-head-line-left"
          text="About us"
          headerclass="side-header"
        />
        <p>
        Welcome to Eratick, Australia's ultimate men’s fashion destination! We specialize in bold styles, vibrant colors, and daring designs that let your unique personality shine. From streetwear to formal wear, every piece in our collection is crafted with passion and precision to keep you looking fresh and confident. The Eratick man is confident, adventurous, and unapologetically himself.
        </p>

        <p>
        Join us in redefining fashion and making a statement. Dive into our latest collection and follow us on social media for exclusive updates and behind-the-scenes content. Stay bold, stay unique, stay Eratick. Follow us @EratickFashion on Instagram, Facebook, and Twitter.
        </p>
      </div>
      <div className="side-image">
        {/* <img src={SideImage} alt="A vace of flowers" /> */}
      </div>
    </div>
  );
};

export default index;
