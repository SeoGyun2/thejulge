import React from 'react';
import { Ad } from '../types/ad';

interface AdCardProps {
  ad: Ad;
}

const AdCard: React.FC<AdCardProps> = ({ ad }) => {
  return (
    <div className="ad-card">
      <img src={ad.imageUrl} alt={ad.title} />
      <div className="ad-info">
        <h3>{ad.title}</h3>
        <p>{ad.date}</p>
        <p>{ad.location}</p>
        <p>{ad.price}</p>
        {ad.discount && <span>{ad.discount}</span>}
        {ad.status === 'completed' && <div className="completed-overlay">마감 완료</div>}
      </div>
    </div>
  );
};

export default AdCard;
