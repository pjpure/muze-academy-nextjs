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
    <div className="flex-1">
      <NavBar />
      <Image className="cool-img" src={coolImg} />
      <div className="flex-4">
        <div className="flex-4-item-1">
          <Image src={flex4Img1} />
        </div>
        <div className="flex-4-item-2">
          <Image src={flex4Img2} />
        </div>
        <div className="flex-4-item-3">
          <Image src={flex4Img3} />
        </div>
        <div className="flex-4-item-4">
          <Image src={flex4Img4} />
        </div>
        <div className="flex-4-item-5">
          <Image src={flex4Img5} />
        </div>
      </div>
      <h2 style={{ textAlign: "center" }}>Products</h2>
      <div className="flex-5">
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
      <div className="flex-6">
        <div className="flex-7">
          <h2>Best Seller</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            labore nobis eveniet perferendis rerum dolores aliquid maiores
            nostrum possimus cum!
          </p>
        </div>
        <div>
          <Image src={flex6Img} />
        </div>
      </div>
      <div className="flex-8">
        <div className="flex-9">
          <Image src={flex9Img1} />
          <Image src={flex9Img2} />
        </div>
        <div className="flex-10">
          <Image src={flex10Img} />
        </div>
      </div>
    </div>
  );
};

export default Home;
