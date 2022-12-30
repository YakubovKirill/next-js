import { memo, useEffect, useState } from "react"
import { RatingProps } from "./Rating.props";
import Star from "./Star";

const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        const getStars = (starsArray: JSX.Element[]) => starsArray.map(
            (ratingElement: JSX.Element, i: number) => <Star key={i} filled={ i < rating } />);

        setRatingArray((prev) => (getStars(prev)));
    }, [rating]);

    return (
        <div {...props} className="flex flex-1">
            {ratingArray.map((rating, i) => (<span key={i}>{rating}</span>))}
        </div>
    )
}

export default memo(Rating);
