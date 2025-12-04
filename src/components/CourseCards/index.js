import styles from './styles.module.css';
import courseList from '../../../docs/export_courses'


function CourseWithLink({title, url}) {
    return (
        <div className={styles.ag_courses_item}>
            <a href={url} className={styles.ag_courses_item_link}>
                <div className={styles.ag_courses_item_bg}></div>
                <div className={styles.ag_courses_item_title}>
                    {title}
                </div>
            </a>
        </div>
    );
}


export default function CoursesList() {
    return (
        <section className={styles.ag_format_container}>
            <div className={styles.ag_courses_box}>
                {courseList.map((props, idx) => (
                    <CourseWithLink key={idx} {...props} />
                ))}
            </div>
        </section>
    );
}