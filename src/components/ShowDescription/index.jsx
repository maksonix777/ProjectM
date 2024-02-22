import React, { useState } from 'react';
import s from './ShowDescription.module.css';

const ShowDescription = ({ description }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const truncatedDescription = description?.slice(0, 100);
    const hasMore = description?.length > 100;

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div>
              <p className={s.titleDescr}>Description</p>
              <p className={`${s.descriptionTxt} ${showFullDescription ? '' : s.truncatedDescription}`}>
                {showFullDescription ? description : truncatedDescription + (hasMore ? '...' : '')}
            </p>
            {hasMore && (
                <button className={s.readMore} onClick={toggleDescription}>
                    {showFullDescription ? 'Read less' : 'Read more'}
                </button>
            )}
        </div>
    );
};



export default ShowDescription;