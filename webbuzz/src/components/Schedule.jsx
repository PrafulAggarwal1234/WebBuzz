import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Schedule() {
  const [selectedTournament, setselectedTournament] = useState({})
  const [selectedRound, setselectedRound] = useState(0)
  const [tournamentsData, setTournamentsData] = useState([])
  const [allTournaments, setAllTournaments] = useState([])
  const [matchesData, setMatchesData] = useState([])
  const [activeMatchId, setActiveMatchId] = useState(null);

  const showScorecard = (matchId) => {
    setActiveMatchId(matchId);
  };

  const closeScorecard = () => {
    setActiveMatchId(null);
  };
//   const data_2=[{
//     "_id": "66ddb34d5545bbf149d4f8b7",
//     "name": "MCF",
//     "year": 2024,
//     "city": "KGP",
//     "startDate": "2024-09-08T00:00:00.000Z",
//     "endDate": "2024-09-19T00:00:00.000Z",
//     "teams": [
//         "66ddb5c08e9a6db118e90737",
//         "66ddb61e8e9a6db118e9073d",
//         "66ddb6328e9a6db118e90742",
//         "66ddb63b8e9a6db118e90747",
//         "66ddb63c8e9a6db118e9074c",
//         "66ddb63c8e9a6db118e90751",
//         "66ddb63d8e9a6db118e90756",
//         "66ddb63d8e9a6db118e9075b"
//     ],
//     "matches": [
//         {
//             "_id": "66ddbe4ce41de4f98c7e3739",
//             "tournament": "66ddb34d5545bbf149d4f8b7",
//             "year": 2024,
//             "date": "2024-09-10T00:00:00.000Z",
//             "venue": "Stadium A",
//             "round": 1,
//             "team1": {
//                 "_id": "66ddb91fcc1f32b10e7e674a",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "MMM",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "team2": {
//                 "_id": "66ddb925cc1f32b10e7e674f",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "LBS",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "completed": true,
//             "team1_score": 180,
//             "team2_score": 150,
//             "team1_wickets": 6,
//             "team2_wickets": 10,
//             "team1_overs": 20,
//             "team2_overs": 18.3,
//             "team1_extras": 5,
//             "team2_extras": 8,
//             "winner": "66ddb91fcc1f32b10e7e674a",
//             "__v": 0
//         },
//         {
//             "_id": "66ddbe4ce41de4f98c7e373e",
//             "tournament": "66ddb34d5545bbf149d4f8b7",
//             "year": 2024,
//             "date": "2024-09-10T00:00:00.000Z",
//             "venue": "Stadium B",
//             "round": 1,
//             "team1": {
//                 "_id": "66ddb92ccc1f32b10e7e6754",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "RK",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "team2": {
//                 "_id": "66ddb932cc1f32b10e7e6759",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "RP",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "completed": true,
//             "team1_score": 165,
//             "team2_score": 170,
//             "team1_wickets": 9,
//             "team2_wickets": 7,
//             "team1_overs": 20,
//             "team2_overs": 19.5,
//             "team1_extras": 7,
//             "team2_extras": 6,
//             "winner": "66ddb932cc1f32b10e7e6759",
//             "__v": 0
//         },
//         {
//             "_id": "66ddbe4ce41de4f98c7e3743",
//             "tournament": "66ddb34d5545bbf149d4f8b7",
//             "year": 2024,
//             "date": "2024-09-11T00:00:00.000Z",
//             "venue": "Stadium C",
//             "round": 1,
//             "team1": {
//                 "_id": "66ddb937cc1f32b10e7e675e",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "LLR",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "team2": {
//                 "_id": "66ddb93ccc1f32b10e7e6763",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "MS",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "completed": true,
//             "team1_score": 155,
//             "team2_score": 160,
//             "team1_wickets": 8,
//             "team2_wickets": 6,
//             "team1_overs": 20,
//             "team2_overs": 19,
//             "team1_extras": 5,
//             "team2_extras": 4,
//             "winner": "66ddb93ccc1f32b10e7e6763",
//             "__v": 0
//         },
//         {
//             "_id": "66ddbe4ce41de4f98c7e3748",
//             "tournament": "66ddb34d5545bbf149d4f8b7",
//             "year": 2024,
//             "date": "2024-09-11T00:00:00.000Z",
//             "venue": "Stadium D",
//             "round": 1,
//             "team1": {
//                 "_id": "66ddb941cc1f32b10e7e6768",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "VS",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "team2": {
//                 "_id": "66ddb949cc1f32b10e7e676d",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "JCB",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "completed": true,
//             "team1_score": 140,
//             "team2_score": 175,
//             "team1_wickets": 9,
//             "team2_wickets": 5,
//             "team1_overs": 20,
//             "team2_overs": 18.4,
//             "team1_extras": 9,
//             "team2_extras": 3,
//             "winner": "66ddb949cc1f32b10e7e676d",
//             "__v": 0
//         },
//         {
//             "_id": "66ddbe4ce41de4f98c7e374d",
//             "tournament": "66ddb34d5545bbf149d4f8b7",
//             "year": 2024,
//             "date": "2024-09-13T00:00:00.000Z",
//             "venue": "Stadium E",
//             "round": 2,
//             "team1": {
//                 "_id": "66ddb91fcc1f32b10e7e674a",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "MMM",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "team2": {
//                 "_id": "66ddb932cc1f32b10e7e6759",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "RP",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "completed": true,
//             "team1_score": 200,
//             "team2_score": 180,
//             "team1_wickets": 7,
//             "team2_wickets": 9,
//             "team1_overs": 20,
//             "team2_overs": 20,
//             "team1_extras": 6,
//             "team2_extras": 7,
//             "winner": "66ddb932cc1f32b10e7e6759",
//             "__v": 0
//         },
//         {
//             "_id": "66ddbe4ce41de4f98c7e3752",
//             "tournament": "66ddb34d5545bbf149d4f8b7",
//             "year": 2024,
//             "date": "2024-09-13T00:00:00.000Z",
//             "venue": "Stadium F",
//             "round": 2,
//             "team1": {
//                 "_id": "66ddb93ccc1f32b10e7e6763",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "MS",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "team2": {
//                 "_id": "66ddb949cc1f32b10e7e676d",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "JCB",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "completed": true,
//             "team1_score": 170,
//             "team2_score": 175,
//             "team1_wickets": 10,
//             "team2_wickets": 7,
//             "team1_overs": 19.5,
//             "team2_overs": 19.2,
//             "team1_extras": 5,
//             "team2_extras": 4,
//             "winner": "66ddb949cc1f32b10e7e676d",
//             "__v": 0
//         },
//         {
//             "_id": "66ddbe4ce41de4f98c7e3757",
//             "tournament": "66ddb34d5545bbf149d4f8b7",
//             "year": 2024,
//             "date": "2024-09-15T00:00:00.000Z",
//             "venue": "Stadium G",
//             "round": 3,
//             "team1": {
//                 "_id": "66ddb932cc1f32b10e7e6759",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "RP",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "team2": {
//                 "_id": "66ddb949cc1f32b10e7e676d",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "JCB",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "completed": true,
//             "team1_score": 190,
//             "team2_score": 200,
//             "team1_wickets": 8,
//             "team2_wickets": 6,
//             "team1_overs": 20,
//             "team2_overs": 19.5,
//             "team1_extras": 6,
//             "team2_extras": 8,
//             "winner": "66ddb949cc1f32b10e7e676d",
//             "__v": 0
//         }
//     ],
//     "capacity": 8,
//     "spotsLeft": 0,
//     "completed": false,
//     "__v": 0
// },{
//     "_id": "66ddb34d5545bbf149d4f832",
//     "name": "MCF",
//     "year": 2024,
//     "city": "KGP",
//     "startDate": "2024-09-08T00:00:00.000Z",
//     "endDate": "2024-09-19T00:00:00.000Z",
//     "teams": [
//         "66ddb5c08e9a6db118e90737",
//         "66ddb61e8e9a6db118e9073d",
//         "66ddb6328e9a6db118e90742",
//         "66ddb63b8e9a6db118e90747",
//         "66ddb63c8e9a6db118e9074c",
//         "66ddb63c8e9a6db118e90751",
//         "66ddb63d8e9a6db118e90756",
//         "66ddb63d8e9a6db118e9075b"
//     ],
//     "matches": [
//         {
//             "_id": "66ddbe4ce41de4f98c7e3739",
//             "tournament": "66ddb34d5545bbf149d4f8b7",
//             "year": 2024,
//             "date": "2024-09-10T00:00:00.000Z",
//             "venue": "Stadium A",
//             "round": 1,
//             "team1": {
//                 "_id": "66ddb91fcc1f32b10e7e674a",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "MMM",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "team2": {
//                 "_id": "66ddb925cc1f32b10e7e674f",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "LBS",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "completed": true,
//             "team1_score": 180,
//             "team2_score": 150,
//             "team1_wickets": 6,
//             "team2_wickets": 10,
//             "team1_overs": 20,
//             "team2_overs": 18.3,
//             "team1_extras": 5,
//             "team2_extras": 8,
//             "winner": "66ddb91fcc1f32b10e7e674a",
//             "__v": 0
//         },
//         {
//             "_id": "66ddbe4ce41de4f98c7e373e",
//             "tournament": "66ddb34d5545bbf149d4f8b7",
//             "year": 2024,
//             "date": "2024-09-10T00:00:00.000Z",
//             "venue": "Stadium B",
//             "round": 1,
//             "team1": {
//                 "_id": "66ddb92ccc1f32b10e7e6754",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "RK",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "team2": {
//                 "_id": "66ddb932cc1f32b10e7e6759",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "RP",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "completed": true,
//             "team1_score": 165,
//             "team2_score": 170,
//             "team1_wickets": 9,
//             "team2_wickets": 7,
//             "team1_overs": 20,
//             "team2_overs": 19.5,
//             "team1_extras": 7,
//             "team2_extras": 6,
//             "winner": "66ddb932cc1f32b10e7e6759",
//             "__v": 0
//         },
//         {
//             "_id": "66ddbe4ce41de4f98c7e3743",
//             "tournament": "66ddb34d5545bbf149d4f8b7",
//             "year": 2024,
//             "date": "2024-09-11T00:00:00.000Z",
//             "venue": "Stadium C",
//             "round": 1,
//             "team1": {
//                 "_id": "66ddb937cc1f32b10e7e675e",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "LLR",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "team2": {
//                 "_id": "66ddb93ccc1f32b10e7e6763",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "MS",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "completed": true,
//             "team1_score": 155,
//             "team2_score": 160,
//             "team1_wickets": 8,
//             "team2_wickets": 6,
//             "team1_overs": 20,
//             "team2_overs": 19,
//             "team1_extras": 5,
//             "team2_extras": 4,
//             "winner": "66ddb93ccc1f32b10e7e6763",
//             "__v": 0
//         },
//         {
//             "_id": "66ddbe4ce41de4f98c7e3748",
//             "tournament": "66ddb34d5545bbf149d4f8b7",
//             "year": 2024,
//             "date": "2024-09-11T00:00:00.000Z",
//             "venue": "Stadium D",
//             "round": 1,
//             "team1": {
//                 "_id": "66ddb941cc1f32b10e7e6768",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "VS",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "team2": {
//                 "_id": "66ddb949cc1f32b10e7e676d",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "JCB",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "completed": true,
//             "team1_score": 140,
//             "team2_score": 175,
//             "team1_wickets": 9,
//             "team2_wickets": 5,
//             "team1_overs": 20,
//             "team2_overs": 18.4,
//             "team1_extras": 9,
//             "team2_extras": 3,
//             "winner": "66ddb949cc1f32b10e7e676d",
//             "__v": 0
//         },
//         {
//             "_id": "66ddbe4ce41de4f98c7e374d",
//             "tournament": "66ddb34d5545bbf149d4f8b7",
//             "year": 2024,
//             "date": "2024-09-13T00:00:00.000Z",
//             "venue": "Stadium E",
//             "round": 2,
//             "team1": {
//                 "_id": "66ddb91fcc1f32b10e7e674a",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "MMM",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "team2": {
//                 "_id": "66ddb932cc1f32b10e7e6759",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "RP",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "completed": true,
//             "team1_score": 200,
//             "team2_score": 180,
//             "team1_wickets": 7,
//             "team2_wickets": 9,
//             "team1_overs": 20,
//             "team2_overs": 20,
//             "team1_extras": 6,
//             "team2_extras": 7,
//             "winner": "66ddb932cc1f32b10e7e6759",
//             "__v": 0
//         },
//         {
//             "_id": "66ddbe4ce41de4f98c7e3752",
//             "tournament": "66ddb34d5545bbf149d4f8b7",
//             "year": 2024,
//             "date": "2024-09-13T00:00:00.000Z",
//             "venue": "Stadium F",
//             "round": 2,
//             "team1": {
//                 "_id": "66ddb93ccc1f32b10e7e6763",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "MS",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "team2": {
//                 "_id": "66ddb949cc1f32b10e7e676d",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "JCB",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "completed": true,
//             "team1_score": 170,
//             "team2_score": 175,
//             "team1_wickets": 10,
//             "team2_wickets": 7,
//             "team1_overs": 19.5,
//             "team2_overs": 19.2,
//             "team1_extras": 5,
//             "team2_extras": 4,
//             "winner": "66ddb949cc1f32b10e7e676d",
//             "__v": 0
//         },
//         {
//             "_id": "66ddbe4ce41de4f98c7e3757",
//             "tournament": "66ddb34d5545bbf149d4f8b7",
//             "year": 2024,
//             "date": "2024-09-15T00:00:00.000Z",
//             "venue": "Stadium G",
//             "round": 3,
//             "team1": {
//                 "_id": "66ddb932cc1f32b10e7e6759",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "RP",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "team2": {
//                 "_id": "66ddb949cc1f32b10e7e676d",
//                 "tournament": "66ddb8fecc1f32b10e7e6746",
//                 "name": "JCB",
//                 "city": "New York",
//                 "email": "eagles@example.com",
//                 "phone": 9876543210,
//                 "players": [],
//                 "extra_players": [
//                     "Kevin White",
//                     "Brian Allen",
//                     "George King",
//                     "Edward Scott",
//                     "Jason Wright"
//                 ],
//                 "__v": 0
//             },
//             "completed": true,
//             "team1_score": 190,
//             "team2_score": 200,
//             "team1_wickets": 8,
//             "team2_wickets": 6,
//             "team1_overs": 20,
//             "team2_overs": 19.5,
//             "team1_extras": 6,
//             "team2_extras": 8,
//             "winner": "66ddb949cc1f32b10e7e676d",
//             "__v": 0
//         }
//     ],
//     "capacity": 8,
//     "spotsLeft": 0,
//     "completed": false,
//     "__v": 0
// }]
  const fetchTournaments = async () => {
    const response = await fetch("http://localhost:3000/tournaments")
    const data = await response.json()
    // const data=data_2
    setTournamentsData(data)

    setAllTournaments(data)
    console.log(data);

    setselectedTournament(data[0]);

    setselectedTournament(data[0]._id);

    setMatchesData(data[0].matches);

  }

  useEffect(() => {
    fetchTournaments()
  }, []);
  useEffect(() => {
    let filteredMatches = tournamentsData?.filter(tournament => tournament._id === selectedTournament)[0]?.matches// Find the selected tournament
     if(filteredMatches && selectedRound!=0) {
      filteredMatches=filteredMatches?.filter(match=> match.round==selectedRound )
     }
    setMatchesData(filteredMatches)
    // console.log('tempp:',tempp)
    // setMatchesData(selectedTournament?.matches?.filter(match => (match selectedRound == 0 || match.round === selectedRound)))
  }, [selectedTournament, selectedRound])


  const handleChange1 = (e) => {
    setselectedTournament(e.target.value)
    setTournamentsData(allTournaments)
  }
  const rounds = [
    { value: 0, label: "All Rounds" },
    { value: 1, label: "Group Stage" },
    { value: 2, label: "Semi-Finals" },
    { value: 3, label: "Finals" },
  ]
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Matches and Results</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out the upcoming matches and recent results.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <select value={selectedTournament} onChange={handleChange1}>
                  {tournamentsData.length > 0 && tournamentsData?.map((tournament) => (
                    <option key={tournament._id} value={tournament._id}>
                      {tournament.name}
                    </option>

                  ))}
                </select>
                <select value={selectedRound} onChange={(e) => setselectedRound(e.target.value)}>

                  {rounds.map((round) => (
                    <option key={round.value} value={round.value}>
                      {round.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Matches</h3>
                  <div className="grid gap-2">
                    {matchesData?.map((match, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-md bg-background p-4 shadow-sm"
                      >
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-primary p-2 text-primary-foreground">
                            <BirdIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{match.team1.name} vs. {match.team2.name}</p>
                            <p className="text-sm text-muted-foreground">{match.date}</p>
                          </div>
                        </div>
                        {match.completed ? (
                          <Link
                            href="#"
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                            onClick={() => showScorecard(match._id)}
                          >
                            View Scorecard
                          </Link>
                        ) : (
                          <h3>Forthcoming!</h3>
                        )}
                        {/* Render the modal for this match if it's active */}
                        {activeMatchId === match._id && (
                          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                              <h2 className="text-xl font-bold mb-4">Match Scorecard</h2>
                              <div className="text-sm">
                                <p>{match.team1.name}: {match.team1_score}/{match.team1_wickets} in {match.team1_overs} overs (Extras: {match.team1_extras})</p>
                                <p>{match.team2.name}: {match.team2_score}/{match.team2_wickets} in {match.team2_overs} overs (Extras: {match.team2_extras})</p>
                                <p className="font-semibold mt-2">Winner: {match.team1._id===match.winner ? match.team1.name : match.team2._id===match.winner ? match.team2.name : "No Result" }</p>
                              </div>
                              <button
                                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                                onClick={closeScorecard}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BirdIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 7h.01" />
      <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
      <path d="m20 7 2 .5-2 .5" />
      <path d="M10 18v3" />
      <path d="M14 17.75V21" />
      <path d="M7 18a6 6 0 0 0 3.84-10.61" />
    </svg>
  )
}