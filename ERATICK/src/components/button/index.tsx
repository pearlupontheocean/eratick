import "./style.scss";
import { props as AppProps } from "./types";
import { BsArrowUpRight } from "react-icons/bs";

const index = ({ text }: AppProps) => {
  return (
    <button className="button-comp">
      {text}
      <BsArrowUpRight fontSize="16" />
    </button>
  );
};
export default index;
