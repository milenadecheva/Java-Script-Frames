import {Card, Row, Button} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import NoResults from "./NoResults";
import SongGridItem from "./SongGridItem";
import {setFavoriteSongs} from "../../redux/actions";

function FavoriteList(props) {
    const dispatch = useDispatch();
    const favoriteSongs = useSelector(state => state.favoriteSongs);
    
    function renderFavoriteSongs() {
        if(!favoriteSongs.length) {
            return <NoResults title={'Не си добавил/ла любими песни'}/>
        }
        return favoriteSongs.map(song => {
            return <SongGridItem key={song.id} song={song}/>
        })
    }

    function clearAllFavorites() {
        dispatch(setFavoriteSongs([]))
    }

    return (
        <Card>
            <Card.Body>
                Favorite list
                <Button 
                    onClick={() => clearAllFavorites()}
                variant="link">Clear all</Button>
                <Row>
                    {renderFavoriteSongs()}
                </Row>
            </Card.Body>
        </Card>
    )
}
export default FavoriteList;