export function LevelHeader({ title, objectives }: { title: string; objectives: string[] }) {
  return (
    <header style={{ marginBottom: "1rem" }}>
      <h1 className="cds--type-productive-heading-04">{title}</h1>
      <ul className="cds--list--unordered" style={{ paddingLeft: "1.25rem" }}>
        {objectives.map((o) => (<li key={o} className="cds--type-body-long-01">{o}</li>))}
      </ul>
    </header>
  );
}
