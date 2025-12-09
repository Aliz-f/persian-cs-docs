import styles from "./styles.module.css";
import authors from "../../../blog/authors.json";

const authorList = Object.entries(authors).map(([id, author]) => ({
    id,
    name: author.name,
    title: author.title,
    url: author.url,
    image_url: author.image_url,
    pagePermalink:
        author.page && typeof author.page === "object"
            ? author.page.permalink
            : id,
    socials: author.socials || {},
}));


const SOCIAL_CONFIG = [
    {
        key: "github",
        icon: "logo-github",
        getHref: (value) => `https://github.com/${value}`,
    },
    {
        key: "instagram",
        icon: "logo-instagram",
        getHref: (value) => `https://instagram.com/${value}`,
    },
    {
        key: "x",
        icon: "logo-twitter",
        getHref: (value) => `https://x.com/${value}`,
    },
    {
        key: "linkedin",
        icon: "logo-linkedin",
        getHref: (value) => `https://linkedin.com/in/${value}`,
    },
    {
        key: "facebook",
        icon: "logo-facebook",
        getHref: (value) => `https://facebook.com/${value}`,
    },
];

function AuthorCarousel() {
    return (
        <section className={styles.author_section}>
            <ul className={styles.author_cards}>
                {authorList.map((author) => {
                    const {socials} = author;

                    return (
                        <li className={styles.author_card} key={author.id}>
                            <div className={styles.box}>
                                <div className={styles.image}>
                                    <img
                                        src={author.image_url}
                                        alt={`${author.name} image`}
                                        loading="lazy"
                                    />
                                </div>
                                <p className={styles.author_title}>{author.name}</p>
                                <p className={styles.author_desc}>{author.title}</p>
                                <div className={styles.icons}>

                                    {SOCIAL_CONFIG.map(({key, icon, getHref}) => {
                                        const value = socials?.[key];

                                        if (!value) return null; // skip if this social is not defined

                                        return (
                                            <a
                                                key={key}
                                                href={getHref(value)}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={key}
                                            >
                                                <ion-icon name={icon}></ion-icon>
                                            </a>
                                        );
                                    })}
                                    {author.url && (
                                        <a
                                            href={author.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Website"
                                        >
                                            <ion-icon name="link"></ion-icon>
                                        </a>
                                    )}
                                    {author.pagePermalink && (
                                        <a
                                            href={`/blog/authors/${author.pagePermalink}`}
                                            aria-label="Author posts"
                                            target="_blank"
                                        >
                                            <ion-icon name="archive"></ion-icon>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default AuthorCarousel;
