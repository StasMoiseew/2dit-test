import { FC, useState } from "react";

import "./Task4.css";
import { Input } from "../../components/Input";

export const Task4: FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <section className="task4">
      <form className="task4__form">
        <h1 className="task4__title">Оставите заявку</h1>
        <h3 className="task4__subtitle">И наш специалист свяжется с вами</h3>
        <div className="task4__inputs">
          <Input
            className="task4__input"
            value={name}
            onChange={setName}
            placeholder="Ваше имя"
          />
          <Input
            className="task4__input"
            value={phone}
            onChange={setPhone}
            placeholder="+7 (___) ___-__-__"
            isPhone
          />
          <Input className="task4__input" value={email} onChange={setEmail} isEmail placeholder="Введите Email" />
          
        </div>
        <h3 className="task4__description">Нажимая кнопку, я принимаю пользовательское соглашение, соглашаюсь с политикой<p>конфиденциальности, условиями пользования сайтом, передачей и обработкой моих</p> персональных данных</h3>
        <div className="button__block">
          <button className="task4__button" onClick={handleButtonClick}>
            Оформить заявку
          </button>
          </div>
      </form>
    </section>
  );
};
