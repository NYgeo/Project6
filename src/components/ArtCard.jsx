import React, { useState } from 'react';

const ArtCard = ({ artwork }) => {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };

        return (
    <div className="art-card">
      <div className="art-image">
         {artwork.primaryImageSmall && !imageError ? (
          <img 
            src={artwork.primaryImageSmall} 
            alt={artwork.title} 
            onError={handleImageError}
             />
        ) : (
          <div className="no-image">No Image Available</div>
             )}
      </div>
         <div className="art-info">
        <h3>{artwork.title || 'Untitled'}</h3>
            <p><strong>Artist:</strong> {artwork.artistDisplayName || 'Unknown'}</p>
            <p><strong>Date:</strong> {artwork.objectDate || 'Unknown'}</p>
          <p><strong>Medium:</strong> {artwork.medium || 'Not specified'}</p>
               <p><strong>Department:</strong> {artwork.department || 'Not specified'}</p>
        {artwork.objectURL && (
          <p className="view-more">
            <a href={artwork.objectURL} target="_blank" rel="noopener noreferrer">
              View at The Met
            </a>
          </p>
        )}
      </div></div>);};

export default ArtCard; 