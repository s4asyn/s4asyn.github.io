import React from 'react';

import { Layout } from '#components';

const SeoData = {
    description: 'اینجا کسی هشیار نیست...',
    title: 'خطای 404',
};

export default () => {
    return (
        <Layout SeoData={SeoData}>
            <article></article>
        </Layout>
    );
};
