import styles from "../styles/Articles.module.css";

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const articles = await res.json();
    console.log(articles);
    return { props: { articles } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true };
  }
}

const Home = ({ articles }) => (
  <div className={styles.container}>
    {articles.map((article) => (
      <div key={article.id} className={styles.article}>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
      </div>
    ))}
  </div>
);

export default Home;
