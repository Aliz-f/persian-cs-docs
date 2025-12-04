import styles from './styles.module.css';
import videoList from '../../../youtube/videos_fa.json'


function YouTubeCarousel() {
    const video_length = videoList.length;
    var slice_count = 0
    if (video_length > 20) {
        slice_count = 20
    } else {
        slice_count = videoList.length
    }

    return (
        <section className={styles.youtube_section}>
            <ul className={styles.youtube_cards}>
                {videoList.slice(0, slice_count).map((video, index) => {
                    return (
                        <li className={styles.youtube_card} key={index}>
                            <div className={styles.youtube_visual}>
                                <img
                                    className={styles.youtube_img}
                                    width="384"
                                    height="192"
                                    src={video.rich_thumbnail.url? video.rich_thumbnail.url: video.thumbnail.url}
                                    alt={video.title}
                                />
                            </div>
                            <div className={styles.youtube_content}>
                                <div className={styles.youtube_content_wrapper}>
                                    <h3 className={styles.youtube_title}>{video.title}</h3>
                                    <p className={styles.youtube_desc}>
                                        {video.description}
                                    </p>
                                    <p className={styles.youtube_desc}>
                                        {video.length}
                                    </p>
                                </div>
                                <a href={`https://youtube.com${video.url}`} target="_blank" className={styles.youtube_card_link}> مشاهده ویدیو </a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default YouTubeCarousel;