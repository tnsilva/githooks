import { useEffect, useState } from "react";

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.github.com/users/tnsilva/repos"
      );
      const data = await response.json();
      console.log({ data });
      setRepositories(data);
    }

    fetchData();
  }, []);

  return (
    <ul>
      {repositories.map((repo) => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
}
