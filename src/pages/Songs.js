import SongList from "../components/songs/SongList";
import Filters from "../components/filters/Filters";
import {Col} from "react-bootstrap";
import {SongProvider} from "../components/Songs/SongContext";

function Songs(props) {
    return (
        <SongProvider>
            <Col md={3} >
                <Filters/>
            </Col>
            <Col>
                <SongList/>
            </Col>
        </SongProvider>
    )
}
export default Songs;