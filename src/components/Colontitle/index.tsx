import React from "react";
import { ReactComponent as Bulldozer } from "./bulldozer.svg";
import { ReactComponent as Vk } from "./vk.svg";
import { ReactComponent as Inst } from "./inst.svg";
import classNames from "classnames";
import "./index.css";

type Props = {
  className: string;
};

const ColonTitle = ({ className }: Props) => {
  const inst = "https://www.instagram.com/bulldozerarts";
  const vk = "https://www.vk.com/bulldozerarts";
  const mail = "bulldozerarts@gmail.com";

  const links = [
    {
      icon: <Bulldozer />,
      link: `mailto:${mail}`,
      title: mail,
      target: "_self",
    },
    {
      icon: <Inst />,
      link: inst,
      title: inst,
      target: "_blank",
    },
    {
      icon: <Vk />,
      link: vk,
      title: vk,
      target: "_blank",
    },
  ];

  const renderLinks = () =>
    links.map((link, index) => {
      const linkClassName = classNames("colontitle__link", {
        "colontitle__link--with-large-margin": index === 0,
      });

      return (
        <a
          key={index}
          className={linkClassName}
          href={link.link}
          target={link.target}
          title={link.title}
          rel="noreferrer"
        >
          {link.icon}
        </a>
      );
    });

  const colonTitleClassName = classNames("colontitle", className);

  return (
    <p className={colonTitleClassName}>
      <span>DESIGN BY</span> {renderLinks()} <span>BULLDOZERARTS</span>
    </p>
  );
};

export default ColonTitle;
