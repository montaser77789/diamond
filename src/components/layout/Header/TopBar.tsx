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
          <span className="">khalidisok@yahoo.com</span>

          <span>الرياض - السلي - مخرج 18</span>

          <span dir="ltr">+966 540 212 965</span>
        </div>
      </div>
    </div>
  );
}
