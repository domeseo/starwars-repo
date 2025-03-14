import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClick = () => {
        setIsFavorite(!isFavorite);
    };

    const handleFavorite = () => {
        if (isFavorite) {
            // eliminar de la lista de favoritos
        } else {
            // añadir a la lista de favoritos
        }
    };


    return (
        <Button variant={isFavorite ? 'danger' : 'outline-danger'} onClick={handleClick}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
    );
};

export default FavoriteButton;