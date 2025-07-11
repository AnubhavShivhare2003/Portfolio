import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/anubhav-shivhare-667617212/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/AnubhavShivhare2003" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/its_anubhav_shivhare/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
