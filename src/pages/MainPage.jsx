import Navigation from '../components/Navigation';
import { useGetShipsContext } from '../components/NewProvider';



export default function MainPage() {
  const { isLoading, shipsList, PostShipsInfinite } = useGetShipsContext();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Navigation />
{shipsList}
</div>
  );
}