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

import sneaker1Img from "../assets/sneaker1.png";
import sneaker2Img from "../assets/sneaker2.png";
import sneaker3Img from "../assets/sneaker3.png";
import sneaker4Img from "../assets/sneaker4.png";
import sneaker5Img from "../assets/sneaker5.png";
import sneaker6Img from "../assets/sneaker6.png";
import sneaker7Img from "../assets/sneaker7.png";
import sneaker8Img from "../assets/sneaker8.png";
import sneaker9Img from "../assets/sneaker9.png";
import sneaker10Img from "../assets/sneaker10.png";

import flex6Img from "../assets/flex6.png";
import flex9Img1 from "../assets/flex9-1.png";
import flex9Img2 from "../assets/flex9-2.png";
import flex10Img from "../assets/flex10.png";

const Home: NextPage = () => {
  return (
    <div id="flex-1" data-testid="flex-1">
      <NavBar />
      <div className="header-navbar">
        <Image src={coolImg} alt="flex" />
      </div>
      <div id="flex-4" data-testid="flex-4">
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
      <div id="flex-5" data-testid="flex-5">
        <CardProduct image={sneaker1Img} title="SUPERSTAR" desc="$ 109.09" />
        <CardProduct image={sneaker2Img} title="STAN SMITH" desc="$ 120.89" />
        <CardProduct image={sneaker3Img} title="SL20.3 M" desc="$ 140.00" />
        <CardProduct image={sneaker4Img} title="SUPERSTAR" desc="$ 250.69" />
        <CardProduct
          image={sneaker5Img}
          title="NMD_R1 PRIMEBLUE"
          desc="$ 120.89"
        />
        <CardProduct image={sneaker6Img} title="SUPERCOURT" desc="$ 120.89" />
        <CardProduct
          image={sneaker7Img}
          title="ULTRABOOST 22"
          desc="$ 120.89"
        />
        <CardProduct
          image={sneaker8Img}
          title="4D FUTURECRAFT"
          desc="$ 120.89"
        />
        <CardProduct image={sneaker9Img} title="ULTRA 4D" desc="$ 120.89" />
        <CardProduct
          image={sneaker10Img}
          title="4D FWD_PULSE"
          desc="$ 120.89"
        />
      </div>
      <div id="flex-6" data-testid="flex-6">
        <div id="flex-7" data-testid="flex-7">
          <h1>Best Seller</h1>
          <p>
            Deciding what to wear to express your mood? Do you feel sporty,
            casual, chic or sophisticated? Hey, stop overthinking it. Stan
            Smith's iconic shoe solved this problem decades ago.
          </p>
          <div className="see-more">See More</div>
        </div>
        <div style={{ width: "50%" }}>
          <Image src={flex6Img} alt="flex" />
        </div>
      </div>
      <div id="flex-8" data-testid="flex-8">
        <div id="flex-9" data-testid="flex-9">
          <Image src={flex9Img1} alt="flex" />
          <Image src={flex9Img2} alt="flex" />
        </div>
        <div id="flex-10" data-testid="flex-10">
          <Image src={flex10Img} alt="flex" />
        </div>
      </div>
    </div>
  );
};

export default Home;
