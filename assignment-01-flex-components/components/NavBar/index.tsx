import brandImg from "../../assets/brand.png";
import Image from "next/image";
function NavBar() {
  return (
    <div className="flex-2">
      <ul className="flex-3">
        <li>
          <Image src={brandImg} alt="adidas logo" width={48} height={48} />
        </li>
        <li>All</li>
        <li>Originals</li>
        <li>Sports</li>
      </ul>
    </div>
  );
}

export default NavBar;
