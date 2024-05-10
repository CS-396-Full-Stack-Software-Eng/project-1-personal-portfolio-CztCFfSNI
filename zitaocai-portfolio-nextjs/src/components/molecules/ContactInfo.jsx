import Image from "next/image";
import ContactLink from "../atoms/ContactLink";

const ContactInfo = ({ githubIcon, linkedInIcon, iconSize }) => {
  return (
    <div className="socials flex flex-row gap-2">
      <ContactLink
        href="https://github.com/CztCFfSNI"
        image={
          <Image
            src={githubIcon}
            alt="Github Icon"
            width={iconSize.width}
            height={iconSize.height}
          />
        }
      />
      <ContactLink
        href="https://www.linkedin.com/in/zitaocai"
        image={
          <Image
            src={linkedInIcon}
            alt="Linkedin Icon"
            width={iconSize.width}
            height={iconSize.height}
          />
        }
      />
    </div>
  );
};

export default ContactInfo;
