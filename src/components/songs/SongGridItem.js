import moment from "moment";
import constants from "../../constants";
import FavoriteButton from "./FavoriteButton";

function SongGridItem({song}) {

    function getDate() {
        return moment(song.releaseDate).format("MMM Do YY"); 
    }

    function getPoster() {
        return `${constants.imageBaseUrl}${song.poster_path}`;
    }
    return (
        <>
            <div className="col-md-4">
                <div className="grid-song-container img-thumbnail mb-3">
                    <div className="d-flex">
                        <img className="song-poster w-50" 
                        src={getPoster()} alt={song.title}/>
                        <div className="px-2">
                            <div className="song-vote badge rounded-pill bg-primary">
                                {song.vote_average}
                            </div>
                            <FavoriteButton song={song}/>
                            <div className="fw-bold song-title py-1">{song.title}</div>
                            <div className="song-release-date">{getDate()}</div>
                        </div>
                    </div>
                    <div className="song-overview pt-3">
                        {song.overview}
                    </div>
                </div>
            </div>
        </>
    )
}
export default SongGridItem;