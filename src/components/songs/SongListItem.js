import moment from "moment";
import constants from "../../constants";
import FavoriteButton from "./FavoriteButton";

function SongListItem({song}) {

    function getDate() {
        return moment(song.releaseDate).format("MMM Do YY"); 
    }

    function getPoster() {
        return `${constants.imageBaseUrl}${song.poster_path}`;
    }

    return (
        <>
            <div className="d-flex py-1">
                <img className="song-poster" src={getPoster()} alt={song.title}/>
                <div className="px-3 flex-grow-1">
                    <div className="d-flex align-items-start justify-content-between">
                        <div>
                            <div className="fw-bold song-title">{song.title}</div>
                            <div className="song-release-date">{getDate()}</div>
                        </div>
                        <span className="song-vote badge rounded-pill bg-primary ms-auto">
                            {song.vote_average}
                        </span>
                        <FavoriteButton song={song}/>
                    </div>
                    <div className="song-overview pt-3">
                        {song.overview}
                    </div>
                </div>
            </div>
            <hr className="my-1"></hr>
        </>
    )
}
export default SongListItem;