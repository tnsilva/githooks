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

  function handleFavorite(id) {
    const newRepositories = repositories.map((repo) => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });

    setRepositories(newRepositories);
  }

  return (
    <ul>
      {repositories.map((repo) => (
        <li key={repo.id}>
          {repo.name}
          {repo.favorite && <span>(Favorito)</span>}
          <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
        </li>
      ))}
    </ul>
  );
}
