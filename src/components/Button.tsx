import React from "react";
import "../stylesheets/btn.css";
import Link from "next/link";
interface ButtonProp {
  href: string;
  text: string;
}
const Button: React.FC<ButtonProp> = ({ href, text }) => {
  return (
    <>
      <Link href={href} className='primary-button'>
        {text}
      </Link>
    </>
  );
};

export default Button;
