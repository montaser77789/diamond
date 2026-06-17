import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { RiTwitterXLine } from "react-icons/ri";

export default function TopBar() {
  return (
    <div
      className="
      border-b
      hidden
      lg:flex
      h-[60px]
      items-center
    "
    >
      <div
        className="
        max-w-[1400px]
        mx-auto
        w-full
        px-10
        flex
        justify-between
        text-black
      "
      >
        <div className="flex gap-8 text-primary">
          <FaFacebookF />
          <RiTwitterXLine />
          <FaInstagram />
          <FaWhatsapp />
        </div>

        <div className="flex gap-12">
          <span className="">info@aldawalmassy.sa</span>

          <span>الرياض 12834 - السعودية</span>

          <span dir="ltr">+966 55 876 3676</span>
        </div>
      </div>
    </div>
  );
}
