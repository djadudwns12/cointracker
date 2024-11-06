const Movie = ({
  rnum,
  rank,
  rankInten,
  rankOldAndNew,
  movieCd,
  movieNm,
  openDt,
}) => {
  return (
    <li className="list-group-item">
      <div>{movieNm}</div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <span>Rank : {rank}</span>
        <span>openDt : {openDt}</span>
      </div>
    </li>
  );
};

export default Movie;
