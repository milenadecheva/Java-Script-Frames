import {Form} from "react-bootstrap";
import {useSong} from "../songs/SongContext";

function SortBy(props) {
    const {selectedSortBy, setSelectedSortBy} = useSong();
    const options = [
        {
            value: "popularity.desc",
            title: "Най-слушани",
        },
        {
            value: "vote_average.desc",
            title: "С най-висок рейтинг",
        },
        {
            value: "release_date.desc",
            title: "Най-скоро създадени",
        },
    ]

    function getOptions() {
        return options.map(option => {
            return <option 
                    key={option.value}
                    value={option.value}>
                {option.title}
            </option>
        })
    }

    return (
        <Form.Group 
            className="mb-3" 
            controlId="filterForm.ControlSelect1">
            <Form.Label>Подреди по</Form.Label>
            <Form.Select
                value={selectedSortBy}
                onChange={e => setSelectedSortBy(e.target.value)}>
                {getOptions()}
            </Form.Select>
        </Form.Group>
    )
}
export default SortBy;