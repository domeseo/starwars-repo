import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const FavoriteButton = ({ item }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Sincroniza el estado inicial con el almacenamiento local
        setIsFavorite(IsFavorite(item));
    }, [item]);

    const handleClick = () => {
        setIsFavorite(!isFavorite);
    };

    const CreateFavorite = () => {
        localStorage.setItem('favorites', JSON.stringify([]));
    };

    const GetFavorites = () => {
        const favorites = localStorage.getItem('favorites');
        return favorites ? JSON.parse(favorites) : [];
    };

    const AddFavorite = (item) => {
        const favorites = GetFavorites();
        if (!favorites.includes(item)) {
            favorites.push(item);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    };

    const RemoveFavorite = (item) => {
        const favorites = GetFavorites();
        const index = favorites.indexOf(item);
        if (index !== -1) {
            favorites.splice(index, 1);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    };

    const IsFavorite = (item) => {
        const favorites = GetFavorites();
        return favorites.includes(item);
    };

    const handleFavorite = () => {
        if (isFavorite) {
            RemoveFavorite(item);
        } else {
            AddFavorite(item);
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <Button variant={isFavorite ? 'danger' : 'outline-danger'} onClick={handleFavorite}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
    );
};

export default FavoriteButton;