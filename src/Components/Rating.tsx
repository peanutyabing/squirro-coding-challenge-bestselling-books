import { RatingProps } from "../Types/Interfaces";
import starFilled from "../Assets/star-filled.svg";
import starUnfilled from "../Assets/star-unfilled.svg";

export default function Rating({ rating }: RatingProps) {
  const generateRatingBar = () => {
    const ratingBar = [];
    for (let i = 0; i < rating; i++) {
      ratingBar.push(
        <img key={`filled${i}`} className="w-6" src={starFilled} alt="⭐" />
      );
    }
    for (let i = 0; i < 5 - rating; i++) {
      ratingBar.push(
        <img key={`unfilled${i}`} className="w-5" src={starUnfilled} alt="⭐" />
      );
    }
    return ratingBar;
  };
  return (
    <div className="flex items-center select-none">{generateRatingBar()}</div>
  );
}
