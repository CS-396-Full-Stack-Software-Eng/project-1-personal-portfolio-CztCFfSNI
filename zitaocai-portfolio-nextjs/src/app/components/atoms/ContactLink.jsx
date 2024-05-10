import Link from "next/link";

const ContactLink = ({ href, image }) => {
  return (
    <Link href={href}>
      {image}
    </Link>
  );
};

export default ContactLink;
