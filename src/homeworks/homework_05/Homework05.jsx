import React from 'react';
import Feedback from '../../components/feedback/Feedback';

export default function Homework05() {
  return (
    <div>
      <h1>Homework 05</h1>
      <p>
        Создайте компонент Feedback в папке components, в самом компоненте будут
        находиться: кнопка “Like” и справа от неё количество лайков кнопка
        “Dislike" и справа от неё количество дизлайков Кнопка “Reset Results”,
        при клике на которую, лайки и дизлайки обнуляются Для кнопок используйте
        компонент Button Стили на ваше усмотрение Подсказка: в компоненте
        Feedback нужно использовать два стейта (так можно) Создайте компонент
        Homework05, в который передайте компонент Feedback. Импортируйте
        компонент Homework05 в index.jsx
      </p>
      <Feedback />
    </div>
  );
}
