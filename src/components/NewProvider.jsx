import { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

const modalContext = createContext();
export function useModalContext() {
  return useContext(modalContext);
}

const getShipsContext = createContext();
export function useGetShipsContext() {
  return useContext(getShipsContext);
}

// PROVIDER
export default function NewProvider({ children }) {
  // VARIABLES
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [pickedShip, setPickedShip] = useState(null);
  const [loggedInData, setLoggedInData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // API

  const getShips = async (pageParam = 0) => {
    const response = await axios.get(
      `https://swapi.dev/api/starships/?page=${pageParam}`
    );
    console.log(response.data);
    return response.data;
  };

  const { status, error, data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["ships", "infinite"],
    getNextPageParam: (prevData) => {
      return prevData.next
        ? new URL(prevData.next).searchParams.get("page")
        : undefined;
    },
    queryFn: ({ pageParam = 1 }) => getShips(pageParam),
  });

  let spaceships;
  let shipsList;
  const PostShipsInfinite = async () => {
    try {
      await fetchNextPage();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (status === "loading") return <h2>Loading...</h2>;
  else if (status === "error") {
    spaceships = <h2>{JSON.stringify(error)}</h2>;
  } else {
    spaceships = (
      <>
        {data.pages
          .flatMap((page) => page.results)
          .map((ship) => (
            <div
              onClick={() => fetchShip(ship)}
              key={ship.name}
              className="ship-item"
            >
              <p>{ship.name}</p>
              <p>{ship.model}</p>
            </div>
          ))}
      </>
    );
    shipsList = (
      <div className="ships-list">
        <div>{spaceships}</div>
        {hasNextPage && (
          <button className="view-more-btn" onClick={() => fetchNextPage()}>
            View more...
          </button>
        )}
      </div>
    );
  }

  const displayShip = () => {
    if (show && pickedShip) {
      return (
        <div className="ship" onClick={handleClose}>
          <div key={pickedShip.name} className="ship-wrapper">
            <img
              src={`https://starwars-visualguide.com/assets/img/starships/${pickedShip.url
                .slice(32)
                .match(/\d+,?/g)}.jpg`}
              alt=""
            ></img>
            <div className="ship-description">
              <h2 className="ship-name">{pickedShip.name}</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="ship-details">
                <div className="ship-details-1">
                  <p>Model: {pickedShip.model}</p>
                  <p>Cost in credits: {pickedShip.cost_in_credits}</p>
                  <p>Atmospheric Speed: {pickedShip.max_atmosphering_speed}</p>
                </div>
                <div className="ship-details-2">
                  <p>Manufacturer: {pickedShip.manufacturer}</p>
                  <p>Length: {pickedShip.length}</p>
                  <p>Crew: {pickedShip.crew}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const fetchShip = (ship) => {
    console.log("fetchShip fired");
    setShow(true);
    setPickedShip(ship);
    navigate(`/ship/:${ship.name}`);
    displayShip();
  };
  const handleClose = () => {
    setShow(false);
  };

  //PILOTS
  const displayPilots = () => {
    if (show && pickedShip) {
      const pilotsUrls = pickedShip.pilots;
      const getPilotsNames = async () => {
        const response = await axios.get("https://swapi.dev/api/people/");
        const pilots = response.data;
        console.log("pilotName", pilotName);

        return pilotName;
      };

      const pilotsNums = pilotsUrls.map((pilot) => {
        const pilotNum = parseInt(pilot.match(/\d+,?/g));

        return pilotNum;
      });
      let pilotName;

      const pilotUrls = [
        "https://swapi.dev/api/people/13/",
        "https://swapi.dev/api/people/14/",
        "https://swapi.dev/api/people/25/",
        "https://swapi.dev/api/people/31/",
      ];

      // Names
      const fetchPilotNames = async () => {
        try {
          const pilotNames = await Promise.all(
            pilotUrls.map(async (url) => {
              const response = await axios.get(url);
              return response.data.name;
            })
          );
          return pilotNames;
        } catch (error) {
          console.error("Error fetching pilot names:", error);
          return [];
        }
      };

      fetchPilotNames()
        .then((names) => {
          console.log("Pilot names:", names);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      const getPilotName = async (num) => {
        const response = await axios.get(`https://swapi.dev/api/people/${num}`);
        pilotName = response.data.name;
        console.log("pilotName", pilotName);

        return pilotName;
      };

      console.log("urls", pilotsUrls);
      console.log("nums", pilotsNums);
      return pilotsNums.map((num, index) => (
        <div key={index} className="pilot-card">
          <img
            key={num}
            alt="pilot"
            className="pilot-img"
            src={`https://starwars-visualguide.com/assets/img/characters/${num}.jpg`}
          />
        </div>
      ));
    }
    return null;
  };
  //MOVIES
  const displayFilms = () => {
    if (show && pickedShip) {
      const filmsUrls = pickedShip.films;
      console.log("filmsUrls", filmsUrls);

      const filmsNums = filmsUrls.map((film) => {
        const filmNum = parseInt(film.match(/\d+,?/g));

        return filmNum;
      });
      console.log("urls", filmsUrls);
      console.log("nums", filmsNums);
      return filmsNums.map((num) => (
        <img
          key={num}
          alt="film"
          className="film-img"
          src={`https://starwars-visualguide.com/assets/img/films/${num}.jpg`}
        />
      ));
    }
    return null;
  };

  const contextValue = {
    show,
    fetchShip,
    displayShip,
    spaceships,
    PostShipsInfinite,
    shipsList,
    displayPilots,
    displayFilms,
    loggedInData,
  };

  return (
    <>
      <getShipsContext.Provider value={contextValue}>
        {children}
      </getShipsContext.Provider>
    </>
  );
}
