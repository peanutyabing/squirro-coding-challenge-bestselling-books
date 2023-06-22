import { useState, useRef } from "react";
import { RatingProps } from "../Types/Interfaces";
import axios from "axios";
import starFilled from "../Assets/star-filled.svg";
import starUnfilled from "../Assets/star-unfilled.svg";

export default function Rating({ rating, storeId }: RatingProps) {
  const [userRating, setUserRating] = useState(0);
  const userClicked = useRef(false);

  const generateRatingBar = (rating: number) => {
    const ratingBar = [];
    for (let i = 0; i < rating; i++) {
      ratingBar.push(
        <img
          key={i + 1}
          className="w-6 cursor-pointer"
          src={starFilled}
          alt="⭐"
          onMouseEnter={() => {
            userClicked.current = false;
            setUserRating(i + 1);
          }}
          onMouseLeave={() => {
            if (userClicked.current === false) {
              setUserRating(0);
            }
          }}
          onClick={() => {
            userClicked.current = true;
            setUserRating(i + 1);
            // axios.put(`http://localhost:3000/stores/${storeId}`, {
            //   rating: i + 1,
            // });
            // It seems that the mock server is not configured to handle PUT requests (status 500).
          }}
        />
      );
    }
    for (let i = 0; i < 5 - rating; i++) {
      ratingBar.push(
        <img
          key={rating + i + 1}
          className="w-6 cursor-pointer"
          src={starUnfilled}
          alt="⭐"
          onMouseEnter={() => {
            setUserRating(rating + i + 1);
          }}
          onMouseLeave={() => {
            setUserRating(0);
          }}
          onClick={() => {
            setUserRating(rating + i + 1);
            // axios.put(`http://localhost:3000/stores/${storeId}`, {
            //   rating: rating + i + 1,
            // });
            // It seems that the mock server is not configured to handle PUT requests (status 500)
          }}
        />
      );
    }
    return ratingBar;
  };
  return (
    <div className="flex items-center select-none gap-1">
      {userRating === 0
        ? generateRatingBar(rating)
        : generateRatingBar(userRating)}
    </div>
  );
}
