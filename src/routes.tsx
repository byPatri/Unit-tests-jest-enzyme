import StoreExample from './examples/Store';
import BasicExample from './examples/Basic';
import FetchExample from './examples/Fetch';

type RouteType = {
    name: string,
    label: string,
    Component: React.FC
};

export const ROUTES: RouteType[] = [
    { name: 'Basic', label: 'Basic React Component', Component: BasicExample },
    { name: 'Fetch', label: 'Basic API fetch', Component: FetchExample },
    { name: 'Store', label: 'React Component connected to redux store', Component: StoreExample }
];
