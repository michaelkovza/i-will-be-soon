import React, { ChangeEvent, useRef } from "react";
import InputMask from "react-input-mask";
import classNames from "classnames";
import html2canvas from "html2canvas";
import Cards from "../Cards";
import "./index.css";

type SameFields = {
  className: string;
  image: string;
  phoneNumber: string;
  onIllustrationChange: (image: string) => void;
};

type withPreview = SameFields & {
  previewMode: boolean;
  onPhoneNumberChange?: never;
};

type WithoutPreview = SameFields & {
  previewMode?: never;
  onPhoneNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type Props = WithoutPreview | withPreview;

const Preview = (props: Props) => {
  const cutHereRef = useRef<HTMLDivElement>(null);
  const { className, image, phoneNumber } = props;
  let previewClassName = classNames("preview", className);
  const placeholder = "8 888 888 88 88";

  if (props.previewMode) {
    const onClick = () => props.onIllustrationChange(image);
    previewClassName = classNames(previewClassName, "preview--small");

    return (
      <div className={previewClassName} onClick={onClick}>
        <p className="preview__phone-number ">{phoneNumber || placeholder}</p>
        <img className="preview__illustration" src={image} alt="Иллюстрация" />
      </div>
    );
  }

  if (!props.previewMode) {
    const onDownload = (image: string) => {
      const link = document.createElement("a");
      link.href = image;
      link.download = "СкороБуду.png";
      link.click();
    };

    const onClick = () => {
      if (cutHereRef && cutHereRef.current) {
        html2canvas(cutHereRef.current, { scale: 5}).then(
          (canvas) => {
            onDownload(canvas.toDataURL("image/png"));
          }
        );
      }
    };
    const mask = "9 999 999 99 99";
    const validPhoneNumberLengthWithSpaces = 15;
    const isSaveButtonDisabled =
      phoneNumber.length !== validPhoneNumberLengthWithSpaces;

    return (
      <div className={previewClassName}>
        <p className="preview__paragraph">ТВОЙ НОМЕР <span className="preview__arrow">↓</span></p>
        <div className="preview__cut-here" ref={cutHereRef}>
          <div className="preview__phone-number-container">
            <InputMask
              className="preview__phone-number"
              mask={mask}
              // @ts-ignore
              maskChar={null}
              onChange={props.onPhoneNumberChange}
              value={phoneNumber}
              placeholder={placeholder}
            />
          </div>
          <img
            className="preview__illustration"
            src={image}
            alt="Иллюстрация"
          />
        </div>
        <Cards
          currentIllustration={image}
          className="preview__cards"
          phoneNumber={phoneNumber}
          onIllustrationChange={props.onIllustrationChange}
        />
        <button
          className="preview__save-button"
          onClick={onClick}
          disabled={isSaveButtonDisabled}
        >
          Сохранить
        </button>
      </div>
    );
  }

  return null;
};

export default Preview;
