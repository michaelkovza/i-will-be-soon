import React, { ChangeEvent, useState } from "react";
import Cards from "./components/Cards";
import ColonTitle from "./components/Colontitle";
import Preview from "./components/Preview";
import IWillBeSoon1 from "./illustrations/1.png";
import "./App.css";

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [illustration, setIllustration] = useState<string>(IWillBeSoon1);

  const onPhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };

  const onIllustrationChange = (currentIllustration: string) => {
    setIllustration(currentIllustration);
  };

  return (
    <div className="form container">
      <div className="form__preview-container">
        <Preview
          className="form__preview"
          image={illustration}
          phoneNumber={phoneNumber}
          onPhoneNumberChange={onPhoneNumberChange}
          onIllustrationChange={ onIllustrationChange }
        />
        <ColonTitle className="form__colontitle" />
      </div>
      <Cards
        currentIllustration={ illustration }
        className="form__cards"
        phoneNumber={phoneNumber}
        onIllustrationChange={onIllustrationChange}
      />
    </div>
  );
};

export default App;
