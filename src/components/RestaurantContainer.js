import { CDN_LINK } from "../utils/constants";

const RestaurantContainer = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    resData.info;
  return (
    <div className="p-4 m-4 w-[230px] bg-gray-100">
      <img
        className="res-logo"
        alt="res-img"
        src={CDN_LINK + cloudinaryImageId}
      />
      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantContainer;
