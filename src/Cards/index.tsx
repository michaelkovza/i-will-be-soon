import React from "react";
import classNames from "classnames";
import IWillBeSoon1 from "../illustrations/1.png";
import IWillBeSoon2 from "../illustrations/2.png";
import IWillBeSoon3 from "../illustrations/3.png";
import IWillBeSoon4 from "../illustrations/4.png";
import IWillBeSoon5 from "../illustrations/5.png";
import IWillBeSoon6 from "../illustrations/6.png";
import IWillBeSoon7 from "../illustrations/7.png";
import IWillBeSoon8 from "../illustrations/8.png";
import IWillBeSoon9 from "../illustrations/9.png";
import IWillBeSoon10 from "../illustrations/10.png";
import Preview from "../Preview";
import "./index.css";

type Props = {
  currentIllustration: string;
  className: string;
  phoneNumber: string;
  onIllustrationChange: (currentIllustration: string) => void;
};

const Cards = ({ phoneNumber, onIllustrationChange, className, currentIllustration }: Props) => {
  const illustrations = [
    IWillBeSoon1,
    IWillBeSoon2,
    IWillBeSoon3,
    IWillBeSoon4,
    IWillBeSoon5,
    IWillBeSoon6,
    IWillBeSoon7,
    IWillBeSoon8,
    IWillBeSoon9,
    IWillBeSoon10,
  ];

  const renderIllustrations = () =>
    illustrations.map((illustration) => (
      <Preview
        key={illustration}
        className={
          classNames("cards__preview", {
            "cards__preview--current": illustration === currentIllustration
          })
        }
        phoneNumber={phoneNumber}
        image={illustration}
        onIllustrationChange={() => {
          onIllustrationChange(illustration);
        }}
        previewMode
      />
    ));

  const cardsClassName = classNames("cards", className);

  return (
    <div className={cardsClassName}>
        {renderIllustrations()}
    </div>
  );
};

export default Cards;
