import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PeopleV2 from './components/PeopleV2';
import CharacterDetail from './components/CharacterDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PeopleV2 />} />
                <Route path="/character/:id" element={<CharacterDetail />} />
            </Routes>
        </Router>
    );
}

export default App; 