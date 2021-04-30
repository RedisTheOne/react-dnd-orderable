import { useState, useCallback } from 'react';
import { Card } from './Card';
import update from 'immutability-helper';
const style = {
    width: 400,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
};
export const Container = () => {
      const [cards, setCards] = useState([
          {
              id: 1,
              text: 'Write a cool JS library',
          },
          {
              id: 2,
              text: 'Make it generic enough',
          },
          {
              id: 3,
              text: 'Write README',
          },
          {
              id: 4,
              text: 'Create some examples',
          },
          {
              id: 6,
              text: '???',
          },
          {
              id: 7,
              text: 'PROFIT',
          },
      ]);
      const moveCard = useCallback((dragIndex, hoverIndex) => {
          const dragCard = cards[dragIndex];
          setCards(update(cards, {
              $splice: [
                  [dragIndex, 1],
                  [hoverIndex, 0, dragCard],
              ],
          }));
      }, [cards]);

      const onDrop = useCallback(() => {
        console.log(cards);
      }, [cards]);

      const renderCard = (card, index) => {
          return (<Card key={card.id} onDrop={onDrop} index={index} id={card.id} text={card.text} moveCard={moveCard}/>);
      };
      return (<>
      <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
    </>);
};
