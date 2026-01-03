import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 mt-6">
      <a href="https://github.com/Surya-Teja-Kancharla" target="_blank"><FaGithub size={24} /></a>
      <a href="https://linkedin.com/in/surya-teja-kancharla-b29043230" target="_blank"><FaLinkedin size={24} /></a>
      <a href="https://instagram.com/surya_teja_1021" target="_blank"><FaInstagram size={24} /></a>
      <a href="https://x.com/surya_teja_1803" target="_blank"><FaXTwitter size={24} /></a>
    </div>
  );
}
