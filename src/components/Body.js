import React, { useState } from 'react';

function Body() {
  const [enlargedCard, setEnlargedCard] = useState(null);

  const handleCardClick = (cardIndex) => {
    setEnlargedCard(cardIndex === enlargedCard ? null : cardIndex);
  };

  return (
    <div className = "wrapper">
      <div className = "first-row">
        <div
          className = {`card ${enlargedCard === 1 ? 'enlarged' : ''}`}
          onClick = {() => handleCardClick(1)}
        >
          <img src = "http://surl.li/ljbfpo" alt = "John Doe" className = "card-image" />
          <h2>John Doe</h2>
          <p>Age: 30</p>
          <p>Location: New York</p>
        </div>

        <div
          className = {`card ${enlargedCard === 2 ? 'enlarged' : ''}`}
          onClick = {() => handleCardClick(2)}
        >
          <img src = "http://surl.li/jqzwce" alt = "Jane Smith" className = "card-image" />
          <h2>Jane Smith</h2>
          <p>Age: 25</p>
          <p>Location: San Francisco</p>
        </div>

        <div
          className = {`card ${enlargedCard === 3 ? 'enlarged' : ''}`}
          onClick = {() => handleCardClick(3)}
        >
          <img src = "http://surl.li/umbhsp" alt = "Loki Laufeyson" className = "card-image" />
          <h2>Loki Laufeyson</h2>
          <p>Age: 440</p>
          <p>Location: Asgard</p>
        </div>

        <div
          className = {`card ${enlargedCard === 4 ? 'enlarged' : ''}`}
          onClick = {() => handleCardClick(4)}
        >
          <img src = "http://surl.li/clxpkp" alt = "Thor Odinson" className = "card-image" />
          <h2>Thor Odinson</h2>
          <p>Age: Unknown</p>
          <p>Location: Asgard</p>
        </div>

      </div>

      <div className = "second-row">
        <div
          className = {`card ${enlargedCard === 5 ? 'enlarged' : ''}`}
          onClick = {() => handleCardClick(5)}
        >
          <img src = "http://surl.li/qrrlqv" alt = "Steve Rogers" className = "card-image" />
          <h2>Steve Rogers</h2>
          <p>Age: 100+</p>
          <p>Location: Brooklyn</p>
        </div>

        <div
          className = {`card ${enlargedCard === 6 ? 'enlarged' : ''}`}
          onClick = {() => handleCardClick(6)}
        >
          <img src = "http://surl.li/whnwrr" alt = "Tony Stark" className = "card-image" />
          <h2>Tony Stark</h2>
          <p>Age: 48</p>
          <p>Location: Malibu</p>
        </div>

        <div
          className = {`card ${enlargedCard === 7 ? 'enlarged' : ''}`}
          onClick = {() => handleCardClick(7)}
        >
          <img src = "http://surl.li/irnmom" alt = "Natasha Romanoff" className = "card-image" />
          <h2>Clint Barton</h2>
          <p>Age: 53</p>
          <p>Location: Iowa</p>
        </div>

        <div
          className = {`card ${enlargedCard === 8 ? 'enlarged' : ''}`}
          onClick = {() => handleCardClick(8)}
        >
          <img src = "http://surl.li/mjdfgh" alt = "Bruce Banner" className = "card-image" />
          <h2>Bruce Banner</h2>
          <p>Age: 49</p>
          <p>Location: Unknown</p>
        </div>

      </div>

    </div>

  );

}

export default Body;
