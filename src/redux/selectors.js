import { createSelector } from '@reduxjs/toolkit'

const selectSongs = state => state.songs

export const selectAverageRating = createSelector(
    selectSongs, 
    items => {
        if(!items.length){
            return 0;
        }
        const voteAverageSum = items.reduce((acc, curr) => {
            return acc + curr.vote_average
        }, 0)
        return (voteAverageSum / items.length).toFixed(1);
    }
)