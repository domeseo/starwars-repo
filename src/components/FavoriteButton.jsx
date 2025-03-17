import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const FavoriteButton = ({ item }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Sincroniza el estado inicial con el almacenamiento local
        setIsFavorite(IsFavorite(item));
    }, [item]);

    const GetFavorites = () => {
        const favorites = localStorage.getItem('favorites');
        return favorites ? JSON.parse(favorites) : [];
    };

    // Verifica si un elemento está en favoritos
    const IsFavorite = (item) => {
        const favorites = GetFavorites();
        // Usar url o name/title como identificador único
        const identifier = item.url || item.name || item.title;
        return favorites.some(fav =>
            (fav.url && fav.url === identifier) ||
            (fav.name && fav.name === item.name) ||
            (fav.title && fav.title === item.title)
        );
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
        const identifier = item.url || item.name || item.title;

        // Filtrar el elemento que queremos eliminar
        const updatedFavorites = favorites.filter(fav =>
            !(fav.url === identifier ||
                fav.name === item.name ||
                fav.title === item.title)
        );

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
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