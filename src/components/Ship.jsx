import { useGetShipsContext } from "./NewProvider";
import Pilots from "./Pilots";
import Movies from "./Movies";
import { useEffect } from "react";
import Navigation from "./Navigation";

export default function Ship() {
  const { pickedShip, show, displayShip } = useGetShipsContext();

  useEffect(() => {
    displayShip();
  }, [show, pickedShip, displayShip]);

  return (
    <>
      <Navigation />
      {displayShip()}
      <Pilots />
      <Movies />
    </>
  );
}
