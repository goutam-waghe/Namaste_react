import { CDN_URL } from "../utils/constant";

export const Card = ({ restorantName, spacial, rating, time, imgId, id }) => {
  return (
    <div className="card" key={id}>
      <div className="restourantImg">
        <img src={CDN_URL + `${imgId}`} />
      </div>
      <div className="details">
        <h3>{restorantName}</h3>
        <p>{spacial}</p>
        <p>{rating}⭐</p>
        <p>{time} minutes</p>
      </div>
    </div>
  );
};
