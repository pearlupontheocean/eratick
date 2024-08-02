import "./style.scss";
import Line from "../subHeadLine";
import { galleryType } from "./types";
import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import g1 from "../../assets/images/fl1.png";
import g2 from "../../assets/images/fl11.png";
import g3 from "../../assets/images/fl4.png";
import g4 from "../../assets/images/fl7.jpg";
import g5 from "../../assets/images/fl2.png";
import g6 from "../../assets/images/fl10.jpg";
import g7 from "../../assets/images/fl9.jpg";
import g8 from "../../assets/images/fl3.jpg";
import g9 from "../../assets/images/fl6.jpg";

const index = () => {
  const gallery_items: Array<galleryType> = [
    {
      id: "1",
      src: "https://media.istockphoto.com/id/1733124463/photo/stylish-dark-skinned-man-wearing-a-yellow-blazer.webp?b=1&s=170667a&w=0&k=20&c=dhEVxzO_8gCjtAmRZpALtf59c8YPaux10y6b1cUigAs=",
    },
    {
      id: "2",
      src: 'https://i.pinimg.com/originals/56/83/3f/56833fc135b72c855df60c78ccbf3644.png',
    },
    {
      id: "20",
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4WuTrjoqyWngThjc-dCwt8jhtwKFR0kuig&s',
    },
    {
      id: "3",
      src: 'https://www.thefashionisto.com/wp-content/uploads/2023/05/Mens-Trenchcoat.jpg',
    },
    {
      id: "4",
      src: 'https://i.pinimg.com/564x/48/43/a3/4843a30d29733576da92c98556900b65.jpg',
    },
  ];

  const second_gallery_items: Array<galleryType> = [
    {
      id: "2",
      src: 'https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?cs=srgb&dl=pexels-mostafasanadd-878358.jpg&fm=jpg',
    },
    {
      id: "20",
      src: 'https://img.mensxp.com/media/content/2023/May/Main-Image---iStock_6468788f18ba9.jpeg',
    },

    {
      id: "3",
      src: 'https://w0.peakpx.com/wallpaper/83/181/HD-wallpaper-man-model-glasses-headband-beard-fashion-men-thumbnail.jpg',
    },
    {
      id: "4",
      src: 'https://peaklife.in/wp-content/uploads/2023/08/5-Brands-that-are-Redefining-Mens-Fashion-with-Stylish-Accessories-Cover-Image.jpg',
    },
    {
      id: "1",
      src: 'https://st.depositphotos.com/1550494/2604/i/450/depositphotos_26043279-stock-photo-retro-fifties-summer-fashion-man.jpg',
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
