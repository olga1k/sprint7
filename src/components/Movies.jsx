import { useGetShipsContext } from "./NewProvider";

export default function Movies() {
  const { displayFilms } = useGetShipsContext();

  return (
    <div>
      <hr></hr>
      <h2 className="subtitle">Films</h2>
      <hr></hr>
      <div className="films-wrapper">{displayFilms()}</div>
    </div>
  );
}
