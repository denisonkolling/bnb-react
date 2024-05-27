import StaySearch from '../../componets/StaySearch';
import QuickSearch from '../../componets/QuickSearch';
import RecommendedStays from '../../componets/RecomendedStays';

export default function Home() {
	return (
		<div>
			<StaySearch />
			<QuickSearch />
			<RecommendedStays />
		</div>
	);
}
