import React, { useContext, useState } from "react";
import axios from 'axios';
import constants from '../../constants';
import moment from "moment";

const SongContext = React.createContext();

export function useSong() {
    return useContext(SongContext);
}
export function SongProvider(props) {

    const [selectedSortBy, setSelectedSortBy] = useState("popularity.desc");
    const startFrom = moment().subtract(1, 'years').toDate();
    const [startDate, setStartDate] = useState(startFrom);
    const [endDate, setEndDate] = useState(new Date());
    
    const [checkedState, setCheckedState] = useState(
        new Array(4).fill(false)
    );

    const [listView, setListView] = useState(true);


    const [songs, setSongs] = useState([]);

    const fetchSongs = (path, params) => {
        axios.get(`${constants.baseUrl}${path}` , {
            params: {...params, api_key: constants.apiKey}
        })
        .then(response => {
            setSongs(response.data.results);
        })
    }

    return (
        <SongContext.Provider value={{
                selectedSortBy, 
                setSelectedSortBy,
                startDate,
                setStartDate,
                endDate,
                setEndDate,
                checkedState,
                setCheckedState,
                songs,
                setSongs,
                fetchSongs,
                listView,
                setListView,
            }}>
            {props.children}
        </SongContext.Provider>
    )
}