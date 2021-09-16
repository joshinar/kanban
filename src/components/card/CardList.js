import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/Context';
import Card from './Card';
const CardList = ({ state }) => {
  const { issues } = useContext(AppContext);
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    if (issues) {
      const filteredData = issues.filter((issue) => issue.state === state);
      setCardData(filteredData);
    }
  }, [issues]);
  return (
    <div>
      {cardData &&
        cardData.map((data) => (
          <Card data={data} key={data.id} id={data.id} />
        ))}
    </div>
  );
};

export default CardList;
