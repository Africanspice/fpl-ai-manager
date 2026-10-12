export default function HomePage() {
  return (
    <main className="container">
      <header className="hero">
        <p className="eyebrow">Project foundation</p>
        <h1>FPL AI Manager</h1>
        <p className="intro">Make better Fantasy Premier League decisions.</p>
        <p>A future assistant for squad analysis, captain picks, and transfer planning.</p>
      </header>

      <section className="card" aria-labelledby="team-heading">
        <h2 id="team-heading">Your team dashboard</h2>
        <p>
          Soon, enter your public FPL team ID to view your squad and get
          data-backed recommendations.
        </p>
        <p className="status">Team lookup is not available yet.</p>
        <p>No live player data or recommendations are displayed in this version.</p>
      </section>

      <section className="card" aria-labelledby="roadmap-heading">
        <h2 id="roadmap-heading">What comes next</h2>
        <ol>
          <li>Connect real FPL player and fixture data.</li>
          <li>Load a squad using its public team ID.</li>
          <li>Add explainable captain and transfer suggestions.</li>
        </ol>
      </section>

      <footer>
        <p>Recommendations will be advisory. We will never ask for your FPL password or make automatic transfers.</p>
        <p>Independent project; not affiliated with the Premier League.</p>
      </footer>
    </main>
  );
}
