import type { NextPage } from "next";
import NavBar from "../components/NavBar";
import CardProduct from "../components/CardProduct";
import Image from "next/image";
import coolImg from "../assets/cool.png";
import flex4Img1 from "../assets/flex4-1.png";
import flex4Img2 from "../assets/flex4-2.png";
import flex4Img3 from "../assets/flex4-3.png";
import flex4Img4 from "../assets/flex4-4.png";
import flex4Img5 from "../assets/flex4-5.png";
import flex5Img1 from "../assets/flex5-1.png";
import flex6Img from "../assets/flex6.png";
import flex9Img1 from "../assets/flex9-1.png";
import flex9Img2 from "../assets/flex9-2.png";
import flex10Img from "../assets/flex10.png";

const Home: NextPage = () => {
  return (
    <div id="flex-1">
      <NavBar />
      <Image className="cool-img" src={coolImg} alt="flex" />
      <div id="flex-4">
        <div className="flex-4-item-1">
          <Image src={flex4Img1} alt="flex" />
        </div>
        <div className="flex-4-item-2">
          <Image src={flex4Img2} alt="flex" />
        </div>
        <div className="flex-4-item-3">
          <Image src={flex4Img3} alt="flex" />
        </div>
        <div className="flex-4-item-4">
          <Image src={flex4Img4} alt="flex" />
        </div>
        <div className="flex-4-item-5">
          <Image src={flex4Img5} alt="flex" />
        </div>
      </div>
      <h2 style={{ textAlign: "center" }}>Products</h2>
      <div id="flex-5">
        <CardProduct image={flex5Img1} title="SUPERSTAR" desc="$ 109.09" />
        <CardProduct image={flex5Img1} title="SUPERSTAR" desc="$ 109.09" />
        <CardProduct image={flex5Img1} title="SUPERSTAR" desc="$ 109.09" />
        <CardProduct image={flex5Img1} title="SUPERSTAR" desc="$ 109.09" />
        <CardProduct image={flex5Img1} title="SUPERSTAR" desc="$ 109.09" />
        <CardProduct image={flex5Img1} title="SUPERSTAR" desc="$ 109.09" />
        <CardProduct image={flex5Img1} title="SUPERSTAR" desc="$ 109.09" />
        <CardProduct image={flex5Img1} title="SUPERSTAR" desc="$ 109.09" />
        <CardProduct image={flex5Img1} title="SUPERSTAR" desc="$ 109.09" />
        <CardProduct image={flex5Img1} title="SUPERSTAR" desc="$ 109.09" />
      </div>
      <div id="flex-6">
        <div id="flex-7">
          <h2>Best Seller</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            labore nobis eveniet perferendis rerum dolores aliquid maiores
            nostrum possimus cum!
          </p>
        </div>
        <div>
          <Image src={flex6Img} alt="flex" />
        </div>
      </div>
      <div id="flex-8">
        <div id="flex-9">
          <Image src={flex9Img1} alt="flex" />
          <Image src={flex9Img2} alt="flex" />
        </div>
        <div id="flex-10">
          <Image src={flex10Img} alt="flex" />
        </div>
      </div>
    </div>
  );
};

export default Home;
