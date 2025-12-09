import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import CourseCards from '@site/src/components/CourseCards'
import YoutubeCarousel from '@site/src/components/YoutubeCarousel';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Author from "@site/src/components/Author";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/category/cs-core">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />

            <main>

                <section className={styles.cardsSection}>
                    <div className={styles.section_container}>
                        <Heading as="h1" className="hero__title">
                            دوره ها
                        </Heading>
                    </div>
                    <CourseCards />
                </section>

                <section className={styles.YoutubeSection}>
                    <div className={styles.section_container}>
                        <Heading as="h1" className="hero__title">
                            ویدیوها
                        </Heading>
                    </div>
                    <YoutubeCarousel />
                </section>

                <section className={styles.authorSection}>
                    <div className={styles.section_container}>
                        <Heading as="h1" className="hero__title">
                            نویسندگان
                        </Heading>
                    </div>
                    <Author/>
                </section>

                {/*/!* TODO: complete Features section *!/*/}
                {/*<section className={styles.featuresSection}>*/}
                {/*</section>*/}

            </main>

        </Layout>
    );
}
