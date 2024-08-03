import { useCallback, useState } from "react";
import "./styles.scss";
import SubHeadLine from "../subHeadLine";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import p1 from "../../assets/images/team5.png";
import p2 from "../../assets/images/team4.png";
import p3 from "../../assets/images/team2.png";

const Index = () => {
  const [count, setCount] = useState(0);

  const review_list = [
    {
      name: "Janet Jason",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      role: "CEO, Inspiro",
      photo: p1,
    },
    {
      name: "Janet Johnson",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices.",
      role: "Sales Associate, Roq",
      photo: p2,
    },
    {
      name: "Mark Boris",
      review:
        "That's it. Lorem ipsum dolor sit amet, consectetur adipiscing elit. That's it. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices. That's it. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices. That's it.",
      role: "Tech Lead, Abide",
      photo: p3,
    },
  ];

  const increase_count = useCallback(() => {
    // setCount(count + (review_list.length % count));
    if (count == review_list.length - 1) {
      setCount(0);
      // console.log(count);
    } else {
      setCount(count + 1);
      // console.log(count);
    }
  }, [count]);

  const derease_count = useCallback(() => {
    // setCount(count + (review_list.length % count));
    if (count == 0) {
      setCount(review_list.length - 1);
      // console.log(count);
    } else {
      setCount(count - 1);
      // console.log(count);
    }
  }, [count]);

  return (
    <div className="review-section">
      <SubHeadLine lineclass="" text="Cool Reviews" />
      <p className="review-intro">
        We have an impressive collection of outstanding products for you and
        your family.
      </p>

      <div className="stars">
        <ImStarFull
          color="#FED674"
          fontSize="16px"
          style={{ margin: "0 5px" }}
        />
        <ImStarFull
          color="#FED674"
          fontSize="16px"
          style={{ margin: "0 5px" }}
        />
        <ImStarFull
          color="#FED674"
          fontSize="16px"
          style={{ margin: "0 5px" }}
        />
        <ImStarFull
          color="#FED674"
          fontSize="16px"
          style={{ margin: "0 5px" }}
        />
        <ImStarHalf
          color="#FED674"
          fontSize="16px"
          style={{ margin: "0 5px" }}
        />
      </div>

      {review_list[count] ? (
        <div className="review-pick">
          <BsArrowLeftCircle
            color="#255FFF"
            fontSize="25px"
            style={{ cursor: "pointer" }}
            onClick={() => {
              derease_count();
            }}
          />
          <div className="review-details">
            <p style={{ textAlign: "center", lineHeight: "25px" }}>
              {review_list[count].review}
            </p>
            <div className="reviewer">
              <img
                src={review_list[count].photo}
                alt={review_list[count].name}
              />
              <div>
                <h5>{review_list[count].name}</h5>
                <span className="role">{review_list[count].role}</span>
              </div>
            </div>
          </div>
          <BsArrowRightCircle
            color="#255FFF"
            fontSize="25px"
            style={{ cursor: "pointer" }}
            onClick={() => {
              increase_count();
            }}
          />
        </div>
      ) : (
        <h2>No reviews</h2>
      )}
    </div>
  );
};

export default Index;
