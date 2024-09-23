import Link from "next/link";
import styles from "../styles/users.module.css";

export async function getServerSideProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const users = await res.json();
    console.log(users);
    return { props: { users } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true };
  }
}

export default function Home({ users }) {
  return (
    <div className={styles.container}>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
