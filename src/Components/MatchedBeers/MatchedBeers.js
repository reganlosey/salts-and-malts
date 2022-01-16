
// import React, { useEffect, useState } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import Card from '../Card/Card'
// import './MatchedBeers.scss'

// const MatchedBeers = ({ beerData }) => {
// console.log(beerData)
//   const [filteredData, setFilteredData] = useState([]);



//   const getMatchedBeers = (type) => {
//     const filteredBeers = beerData.filter((beer) => {
//       console.log(beer)
//       if(beer.name.toLowerCase().includes(type) || beer.tagline.toLowerCase().includes(type)){
//         return beer
//       }
//     })
//     setFilteredData(filteredBeers)
//   }

// const beerCards = filteredData.map((beer) => {
//   return <Card 
//   key={beer.id}
//   id={beer.id}
//   name={beer.name}
//   abv={beer.abv}
//   ibu={beer.ibu}
//   tagline={beer.tagline}
//   description={beer.description} />
// })

//   return (
//     <section>
//       <h1>MatchedBeers!</h1>
//       {beerCards}
//     </section>
//   )
// }





// export default MatchedBeers

