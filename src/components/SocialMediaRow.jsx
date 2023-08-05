import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialMediaRow = () => {
  return (
    <div className="flex gap-x-5 [&>a]:duration-200">
      <a href="/" className="hover:translate-y-1 hover:opacity-80">
        <FaFacebookF className="text-5xl text-white rounded-full p-2 bg-[#2b2b2b]" />
      </a>
      <a href="/" className="hover:translate-y-1 hover:opacity-80">
        <FaInstagram className="text-5xl text-white rounded-full p-2 bg-[#2b2b2b]" />
      </a>
      <a href="/" className="hover:translate-y-1 hover:opacity-80">
        <FaTwitter className="text-5xl text-white rounded-full p-2 bg-[#2b2b2b]" />
      </a>
      <a href="/" className="hover:translate-y-1 hover:opacity-80">
        <FaYoutube className="text-5xl text-white rounded-full p-2 bg-[#2b2b2b]" />
      </a>
    </div>
  );
};

export default SocialMediaRow;