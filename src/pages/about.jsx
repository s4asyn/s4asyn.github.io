import React from 'react';

import { Layout } from '#components';

const SeoData = {
    description: 'سعید عصائیان',
    title: 'درباره‌ی من',
};

export default () => {
    return (
        <Layout SeoData={SeoData}>
            <article></article>
        </Layout>
    );
};
