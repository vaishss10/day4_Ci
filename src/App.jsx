import "./App.css";

function App() {
  const drivers = [
    { name: "Max Verstappen", team: "Red Bull Racing", points: 395 },
    { name: "Lando Norris", team: "McLaren", points: 378 },
    { name: "Charles Leclerc", team: "Ferrari", points: 320 },
  ];

  return (
    <div className="app">
      <header>
        <h1>🏎️ F1 Racing</h1>
        <p>Formula 1 Driver Dashboard</p>
      </header>

      <section className="hero">
        <h2>Welcome to the F1 World</h2>
        <p>Speed • Strategy • Racing</p>
        <button>View Drivers</button>
      </section>

      <section className="drivers">
        <h2>Top Drivers</h2>

        <div className="driver-container">
          {drivers.map((driver, index) => (
            <div className="driver-card" key={driver.name}>
              <h3>#{index + 1} {driver.name}</h3>
              <p>{driver.team}</p>
              <strong>{driver.points} Points</strong>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>🏁 F1 CI Demo Project | Built with React</p>
      </footer>
    </div>
  );
}

export default App;