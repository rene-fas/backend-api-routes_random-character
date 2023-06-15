import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) {
    return <div>Error loading data...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const characterEntries = Object.entries(data);

  return (
    <div>
      <h1>Random Character</h1>
      {characterEntries.map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
    </div>
  );
}
