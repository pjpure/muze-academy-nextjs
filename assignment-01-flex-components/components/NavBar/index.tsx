import brandImg from "../../assets/brand.png";
import bagImg from "../../assets/bag.png";
import searchImg from "../../assets/search.png";
import userImg from "../../assets/user.png";
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
      <div className="navbar-search">
        <input />
        <div className="search-icon">
          <Image src={searchImg} alt="search" />
        </div>
      </div>
      <div className="user-bag">
        <Image src={bagImg} alt="search" />
        <Image src={userImg} alt="search" />
      </div>
    </div>
  );
}

export default NavBar;
