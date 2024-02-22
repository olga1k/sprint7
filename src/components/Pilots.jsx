import { useGetShipsContext } from "./NewProvider";

export default function Pilots() {
  const { displayPilots } = useGetShipsContext();

  return (
    <div>
      <hr></hr>
      <h2 className="subtitle">Pilots</h2>
      <hr></hr>
      <div className="pilots-wrapper">{displayPilots()}</div>
    </div>
  );
}
