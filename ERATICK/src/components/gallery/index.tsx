import "./style.scss";
import Line from "../subHeadLine";
import { galleryType } from "./types";
import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import g1 from "../../assets/images/G1.jpg";
import g2 from "../../assets/images/G2.jpg";
import g3 from "../../assets/images/G3.jpg";
import g4 from "../../assets/images/G4.jpg";
import g5 from "../../assets/images/G5.jpg";
import g6 from "../../assets/images/G6.jpg";
import g7 from "../../assets/images/G7.jpg";
import g8 from "../../assets/images/G8.jpg";

const index = () => {
  const gallery_items: Array<galleryType> = [
    {
      id: "1",
      src: g1
    },
    {
      id: "2",
      src: g2,
    },
    {
      id: "20",
      src: g3,
    },
    {
      id: "3",
      src: g4,
    },
    {
      id: "4",
      src: g5,
    },
  ];

  const second_gallery_items: Array<galleryType> = [
    {
      id: "2",
      src: g6,
    },
    {
      id: "20",
      src: g7
    },

    {
      id: "3",
      src: g8,
    },
    {
      id: "4",
      src: g1,
    },
    {
      id: "1",
      src: g2,
    },
  ];

  return (
    <div className="gallery">
      <div className="top">
        <Line
          lineclass="sub-head-line-left"
          text="Gallery"
          headerclass="side-header"
        />
      </div>
      <div className="slide first-slide">
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 2.5,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {gallery_items?.map(({ id, src }) => (
            <img src={src} key={id} className="gallery-image" />
          ))}
        </Carousel>
      </div>

      <div className="slide second-slide">
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 2.5,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={true}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {second_gallery_items?.map(({ id, src }) => (
            <img src={src} key={id} className="gallery-image" />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default index;
