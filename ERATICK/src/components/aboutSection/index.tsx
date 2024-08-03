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
          <span style={{ fontWeight: '600', fontSize: '2rem' }}>Discover the Essence of Style : </span>
          At Eratick, we believe in redefining men's fashion one shirt at a time. Our journey started with a simple idea: to create shirts that not only look good but feel extraordinary. Welcome to a new era of style, where sophistication meets comfort.
        </p>

        <p>
          <span style={{ fontWeight: '600', fontSize: '2rem' }}>Our Vision:</span>
          We are not just a brand; we are a movement. Eratick is dedicated to the modern man who values quality, style, and authenticity. Our vision is to revolutionize men's wear by offering shirts that are meticulously crafted, effortlessly stylish, and unapologetically bold.        </p>
      </div>
      <div className="side-image">
        {/* <img src={SideImage} alt="A vace of flowers" /> */}
      </div>
    </div>
  );
};

export default index;
