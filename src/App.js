import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Financial walkthrough coming soon in 2023.</p>
        <a
          className="App-link"
          href="https://i.imgur.com/lSoUQr2.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          Financial Planning
        </a>
      </header>
      <body className="App-body">
        <Card
          title="Do they have an emergency fund?"
          backTitle="Savings"
          backText="Establish 3-6 months' emergency savings"
        />
        <Card
          title="Are they utilizing childcare?"
          backTitle="Childcare"
          backText="Contribute to FSA dependent care card"
        />
        <Card
          title="Do they have dependents?"
          backTitle="Dependents"
          backText="Obtain life insurance policy"
        />
        <Card
          title="Are they saving for college?"
          backTitle="College"
          backText="Contribute to 529 plan"
        />
        <Card
          title="Do they have a tax advantaged retirement account?"
          backTitle="Retirement Account"
          backText="Maximize contributions to 401k/IRA"
        />
        <Card
          title="Do they have high interest debt?"
          backTitle="Debt"
          backText="Prioritize paying off credit card debt >10%"
        />
      </body>
    </div>
  );
}

export default App;
