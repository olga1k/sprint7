import { useGetShipsContext } from "./NewProvider";

export default function Ships() {
  const { ships, spaceships, error, isLoading, PostShipsInfinite, shipsList } =
    useGetShipsContext();
  PostShipsInfinite();

  return (
    <div className="ships">
      <h2>Star Wars SpaceShips from the Ships Component</h2>
      {shipsList}
    </div>
  );
}
