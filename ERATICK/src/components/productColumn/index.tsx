import "./style.scss";
import { props as AppProps } from "./types";
import Button from "../button";

const index = ({ classname, imageSrc, title, description, id }: AppProps) => {
  return (
    <div className="product">
      <div className={`detail-wrap ${classname}`}>
        <img src={imageSrc} alt="product" className="product-image" />
        <div className="product-text">
          <div className="product-title">{title}</div>
          <div className="product-desc">{description}</div>
          <Button text="view" />
        </div>
      </div>
    </div>
  );
};

export default index;
