import React from 'react';
import { Layout } from '../components';

const SeoData = {
    description: 'This Should be filled',
    title: 'Index Page',
};

export default () => {
    return <Layout SeoData={SeoData}>Hello World!</Layout>;
};
