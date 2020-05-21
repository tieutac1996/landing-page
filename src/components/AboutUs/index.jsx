import Banner from "components/Banner";
import Images from "constants/image";
import React from "react";
import { useSelector } from "react-redux";
import AboutDetails from "./AboutDetails";
import Gallery from "./Gallery";

function AboutUS() {
  const title =
    "“The gladdest moment in human life, me thinks, is a departure into unknown lands.” – Sir Richard Burton";
  const order_1 = {
    title: "Vùng núi Tây Bắc",
    description:
      "Địa hình Tây Bắc núi cao và chia cắt sâu, có nhiều khối núi và dãy núi cao chạy theo hướng Tây Bắc-Đông Nam. Dãy Hoàng Liên Sơn dài tới 180 km, rộng 30 km, với một số đỉnh núi cao trên từ 2800 đến 3000 m. Dãy núi Sông Mã dài 500 km, có những đỉnh cao trên 1800 m.",
    image: Images.TAYBAC,
    check: true,
  };
  const order_2 = {
    title: "Du lịch Tây Bắc",
    description:
      "Cuộc sống miền núi cao tuy khó khăn, vất vả nhưng trên gương mặt họ luôn toát lên sự chất phác, hiền hậu. Nụ cười hồn nhiên, ánh mắt trong veo của các em nhỏ cùng những bộ trang phục sặc sỡ mang đậm bản sắc dân tộc vẽ nên bức tranh hữu tình giữa con người và thiên nhiên làm nao lòng những du khách nơi đây.",
    image: Images.DULICH,
    check: false,
  };

  const travel = useSelector((state) => state.data);
  return (
    <div className="about_us">
      <Banner title={title} imageUrl={Images.BANNER_1} />
      <div className="about_us--main">
        <AboutDetails order={order_1} />
        <div style={{ margin: "40px 0" }}>
          <AboutDetails order={order_2} />
        </div>
        <Gallery gallery={travel} />
      </div>
    </div>
  );
}

export default AboutUS;
