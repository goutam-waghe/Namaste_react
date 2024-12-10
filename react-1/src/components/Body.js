import { Card } from "./Card";
// import resList from "../utils/mockData.js";
import { useEffect, useState } from "react";
import { Simmer } from "./simmer";
// console.log(resList);
// console.log(resList[0].data.cuisines.join(" "));
{
  /* <Card
            restorantName={restourant.data.name}
            spacial={restourant.data.cuisines.join(" ")}
            rating={restourant.data.avgRating}
            time={restourant.data.maxDeliveryTime}
            imgId={restourant.data.cloudinaryImageId}
            key={restourant.data.id}
          /> */
}

export const Body = () => {
  let [resdata, setResdata] = useState([]);

  useEffect(() => {
    fetchdata();
    console.log("use effect is called");
  }, []);

  const fetchdata = async function () {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await data.json();

    const apicc = jsondata.data.cards[4].card.card.gridElements.infoWithStyle;

    resdata = apicc.restaurants;

    setResdata(resdata);
  };
  if (resdata.length === 0) {
    return <Simmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={function () {
            resdata = resdata.filter((data) => {
              return Number(data.info.avgRating) >= 4;
            });
            setResdata(resdata);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="restorants_cards">
        {resdata.map((restourant) => {
          return (
            <>
              <Card
                restorantName={restourant.info.name}
                spacial={restourant.info.cuisines.join(" ")}
                rating={restourant.info.avgRating}
                time={restourant.info.sla.deliveryTime}
                imgId={restourant.info.cloudinaryImageId}
                id={restourant.info.id}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
