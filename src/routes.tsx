import Basic from './examples/Basic';

type RouteType = {
    name: string,
    label: string,
    Component: React.FC
};

export const ROUTES: RouteType[] = [
    { name: 'Basic', label: 'Basic React Component + Tests', Component: Basic }
];
