import React from 'react';

import { Layout } from '#components';

const SeoData = {
    description: 'سعید عصائیان',
    title: 'درباره‌ی من',
};

export default () => {
    return (
        <Layout SeoData={SeoData}>
            <article>
                <section className="leading-relaxed text-primary">
                    <p className="pt-4">
                        من سعید عصائیان هستم. کارشناسی مهندسی کامپیوتر-نرم‌افزار
                        و کارشناسی ارشد فناوری اطلاعات-شبکه‌های کامپیوتری دارم و
                        سابقه‌ی کاریم بیشتر در حوزه‌های طراحی، پیاده‌سازی و
                        مدیریت محصولات نرم‌افزاری بوده است.
                    </p>
                    <p className="pt-4">
                        مهم‌ترین علاقه‌مندیم حل مسئله است. اگرچه به واسطه‌ی کارم
                        بیشتر با مسائل کامپیوتری در ارتباط هستم ولی خودم رو
                        محدود به این مسائل نمی‌کنم. در حوزه‌های مختلف مطالعه
                        می‌کنم؛ از فلسفه و جامعه‌شناسی تا مدیریت ولی در
                        هیچ‌کدومشون ادعایی ندارم چون بیشتر برای من نقش یک‌جور
                        تمرین و گسترش حوزه‌ی فکری را دارند.
                    </p>
                    <p className="pt-4">
                        این سایت هم قرار است که یک جور کشکول باشد؛ ملغمه‌ای از
                        محتواهایی که می‌خواهم همه‌جا همراه داشته باشم، با دیگران
                        به اشتراک بگذارم و بتوانم به آن‌ها ارجاع دهم.
                    </p>
                </section>
            </article>
        </Layout>
    );
};
