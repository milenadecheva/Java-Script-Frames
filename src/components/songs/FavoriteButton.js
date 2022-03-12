import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteSong, removeFavoriteSong } from "../../redux/actions";

function FavoriteButton({song}) {

    const dispatch = useDispatch();
    const favoriteSongs = useSelector(state => state.favoriteSongs);
    
    function isInFavorites() {
        return favoriteSongs.some(favSong => {
            return favSong.id === song.id
        });
    }

    function toggleFavorite() {
       
        if(isInFavorites()){
            dispatch(removeFavoriteSong(song));
            return;
        }

        dispatch(addFavoriteSong(song));
    }

    return (
        <>
            <FontAwesomeIcon
                className={
                    `favorite-icon ms-2 ${isInFavorites() ? 'active' : ''}`
                }
                size="lg"
                onClick={() => toggleFavorite()} 
                icon={faStar} />
        </>
    )
}
export default FavoriteButton;