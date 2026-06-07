import { useState } from "react";
import netflixData from "../Api/data.json";

const Home = () => {
  return (
    <div className="home">
      <div className="card-container">
        {netflixData.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            img_url={item.img_url}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ name, img_url, rating }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="netflix-card">
        <div className="card-img">
          <img src={img_url} alt={name} />
        </div>

        <div className="card-body">
          <h3>{name}</h3>
          {rating && <p>⭐ {rating}</p>}

          <button className="watch-btn" onClick={() => setShowForm(true)}>
            Watch Now
          </button>
        </div>
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="form-box">
            <h2>Book Movie</h2>

            <form>
              <input type="text" placeholder="Your Name" />
              <input type="text" value={name} readOnly />
              <input type="date" />
              <input type="time" />

              <div className="form-btns">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowForm(false)}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;