import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CustomizeButton from "../../components/Buttons/CustomizeButton";
import "./banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="banner-slider">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="slider-item slide-item-1">
            <div className="slider-content container">
              <div className="row w-100 m-0">
                <div className=" col-lg-12 h-100 d-flex justify-content-center align-items-center flex-column">
                  <h1 className="heading-slide m-0 text-center w-100">Nike</h1>
                  <h2 className="sub-heading-slide m-0 mb-4 text-center w-100">AIR FORCE</h2>
                  <h2 className="title-slide mb-2 text-center w-100">Air Force 1 Ultra Flyknit</h2>
                  <div className="info-slide w-100 d-flex justify-content-center align-items-center flex-column">
                    <div className="text-info-slide">
                      <p className="sub-title text-center">
                        Giày Nike Air Force 1 Ultra Flyknit Low 'White Ice' giày thể thao nâng cấp
                        hình bóng cổ điển với công nghệ Flyknit trong phiên bản mới cải tiến của
                        nguyên bản.
                      </p>
                    </div>
                    <div>
                      <CustomizeButton className="primary-btn rounded-btn-3 link-btn m-0 d-flex justify-content-center align-items-center">
                        Mua ngay!
                      </CustomizeButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider-item slide-item-2">
            <div className="slider-content container">
              <div className="row w-100 m-0">
                <div className=" col-lg-12 h-100 d-flex justify-content-center align-items-center flex-column">
                  <h1 className="heading-slide m-0 text-center w-100">ADIDAS</h1>
                  <h2 className="sub-heading-slide m-0 mb-4 text-center w-100">MAN'S RUNNING</h2>
                  <h2 className="title-slide mb-2 text-center w-100">ADIZERO ADIOS PRO 2.0</h2>
                  <div className="info-slide w-100 d-flex justify-content-center align-items-center flex-column">
                    <div className="text-info-slide">
                      <p className="sub-title text-center">
                        Đôi giày Adizero Adios Pro 2 ra đời với các công nghệ tiên tiến sẽ đưa trải
                        nghiệm chạy bộ của bạn lên một tầm cao mới.
                      </p>
                    </div>
                    <div>
                      <CustomizeButton className="primary-btn rounded-btn-3 link-btn m-0 d-flex justify-content-center align-items-center">
                        Mua ngay!
                      </CustomizeButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider-item slide-item-3">
            <div className="slider-content container">
              <div className="row w-100 m-0">
                <div className=" col-lg-12 h-100 d-flex justify-content-center align-items-center flex-column">
                  <h1 className="heading-slide m-0 text-center w-100">JORDAN</h1>
                  <h2 className="sub-heading-slide m-0 mb-4 text-center w-100">AIR PRO 23</h2>
                  <h2 className="title-slide mb-2 text-center w-100">Air Retro High OG Bred</h2>
                  <div className="info-slide w-100 d-flex justify-content-center align-items-center flex-column">
                    <div className="text-info-slide">
                      <p className="sub-title text-center">
                        Nike Jordan Retro High OG Bred nổi bật với sự kết hợp màu sắc độc đáo từ các
                        tông màu đơn giản và gần gũi như đen, đỏ và trắng.
                      </p>
                    </div>
                    <div>
                      <CustomizeButton className="primary-btn rounded-btn-3 link-btn m-0 d-flex justify-content-center align-items-center">
                        Mua ngay!
                      </CustomizeButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
