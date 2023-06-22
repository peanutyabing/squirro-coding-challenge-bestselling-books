import { useEffect, useState, useRef } from "react";
import { RatingProps } from "../Types/Interfaces";
import axios from "axios";
import starFilled from "../Assets/star-filled.svg";
import starUnfilled from "../Assets/star-unfilled.svg";

export default function Rating({ storeId }: RatingProps) {
  const [rating, setRating] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const userClicked = useRef(false);

  useEffect(() => {
    getRating();
  }, [userRating]);

  const getRating = async () => {
    const storeRes = await axios.get(`http://localhost:3000/stores/${storeId}`);
    const rating = storeRes.data.data.attributes.rating;
    setRating(rating);
  };

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
            axios.put(
              `http://localhost:3000/stores/${storeId}`,
              {
                data: {
                  type: "stores",
                  id: storeId,
                  attributes: {
                    rating: i + 1,
                  },
                },
              },
              {
                headers: {
                  "Content-Type": "application/vnd.api+json",
                  Accept: "application/vnd.api+json",
                },
              }
            );
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
            userClicked.current = false;
            setUserRating(rating + i + 1);
          }}
          onMouseLeave={() => {
            if (userClicked.current === false) {
              setUserRating(0);
            }
          }}
          onClick={() => {
            userClicked.current = true;
            setUserRating(rating + i + 1);
            axios.put(
              `http://localhost:3000/stores/${storeId}`,
              {
                data: {
                  type: "stores",
                  id: storeId,
                  attributes: {
                    rating: rating + i + 1,
                  },
                },
              },
              {
                headers: {
                  "Content-Type": "application/vnd.api+json",
                  Accept: "application/vnd.api+json",
                },
              }
            );
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
