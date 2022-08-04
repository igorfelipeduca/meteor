import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';

import MainLayout from '../layout/Main';

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
