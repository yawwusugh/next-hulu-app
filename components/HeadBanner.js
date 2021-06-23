import Image from "next/image";
import HeaderOption from "./HeaderOption";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function HeadBanner() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderOption title="HOME" Icon={HomeIcon} />
        <HeaderOption title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderOption title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderOption title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderOption title="SEARCH" Icon={SearchIcon} />
        <HeaderOption title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div>
        <Image
          className="object-contain"
          src="https://links.papareact.com/ua6"
          alt="hulu"
          width={200}
          height={100}
        />
      </div>
    </header>
  );
}

export default HeadBanner;
