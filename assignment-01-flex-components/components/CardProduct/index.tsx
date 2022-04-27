import Image from "next/image";
type props = {
  image: any;
  title: string;
  desc: string;
};

function CardProduct({ image, title, desc }: props) {
  return (
    <div className="card-product">
      <div className="card-product-img">
        <Image src={image} />
      </div>

      <div className="card-product-info">
        <div className="card-product-title">{title}</div>
        <div className="card-product-desc">{desc}</div>
      </div>
    </div>
  );
}

export default CardProduct;
