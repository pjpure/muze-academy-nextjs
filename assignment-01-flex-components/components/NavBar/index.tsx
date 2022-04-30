import brandImg from "../../assets/brand.png";
import Image from "next/image";
function NavBar() {
  return (
    <div id="flex-2" data-testid="flex-2">
      <ul id="flex-3" data-testid="flex-3">
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
