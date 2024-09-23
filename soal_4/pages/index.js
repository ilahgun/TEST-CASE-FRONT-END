import styles from "../styles/daftar.module.css";
import { useState } from "react";

export default function FormPendaftaran() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, email, password });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.item}>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className={styles.submited}>
          <h3 className={styles.titleSubmit}>Submitted Data</h3>
          <p className={styles.item}>Name: {submittedData.name}</p>
          <p className={styles.item}>Email: {submittedData.email}</p>
          <p className={styles.item}>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}
