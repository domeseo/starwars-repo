import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { GetDataStarWarsApi } from "../components/api.jsx";
import Characters from "../components/peopleData.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">

			<GetDataStarWarsApi />
			<Characters />

		</div>
	);
}; 