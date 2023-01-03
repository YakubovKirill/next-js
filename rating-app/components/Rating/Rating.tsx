import { memo, useEffect, useState } from "react"
import { RatingProps } from "./Rating.props";
import Star from "./Star";

const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    const ratingClickHandle = (rating: number) => {
        if( isEditable ) setRating && setRating(rating);
    }

    useEffect(() => {
        const getStars = new Array(5).fill(0).map(
            (ratingElement: JSX.Element, i: number) => 
                <Star
                    key={i}
                    filled={ i < rating }
                    isHover={isEditable}
                />
            );
        setRatingArray(() => [...getStars]);
    }, [rating, setRating, isEditable]);

    return (
        <div {...props} className="flex flex-1">
            {ratingArray.map((rating, i) => (
                <span
                    key={i}
                    onClick={() => ratingClickHandle(i + 1)}
                    tabIndex={isEditable ? 0 : -1}
                >
                    { rating }
                </span>
            ))}
        </div>
    )
}

export default memo(Rating);
