import { Route, Routes } from 'react-router-dom';

import { NotFound } from '../../misc/routes/NotFound';
import { Information } from './Information';
import { Password } from './Password';
import { Tab } from '../components/Tab';

export const UsersRoutes = () => {
    return (
        <React.Fragment>
            <Tab />
            <Routes>
                <Route index element={<Information />} />
                <Route path="/change-password" element={<Password />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </React.Fragment>
    );
};
