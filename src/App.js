import logo from "./logo.svg";
import "./App.css";
import BasicCard from "./components/BasicCard";

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
        <BasicCard
          title="Do they have an emergency fund?"
          shortTitle="Savings"
          action="Establish 3-6 months' emergency savings"
        />
        <BasicCard
          title="Are they utilizing childcare?"
          shortTitle="Childcare"
          action="Contribute to FSA dependent care card"
        />
        <BasicCard
          title="Do they have dependents?"
          shortTitle="Dependents"
          action="Obtain life insurance policy"
        />
        <BasicCard
          title="Are they saving for college?"
          shortTitle="College"
          action="Contribute to 529 plan"
        />
        <BasicCard
          title="Do they have a tax advantaged retirement account?"
          shortTitle="Retirement Account"
          action="Maximize contributions to 401k/IRA"
        />
        <BasicCard
          title="Do they have high interest debt?"
          shortTitle="Debt"
          action="Prioritize paying off credit card debt >10%"
        />
      </body>
    </div>
  );
}

export default App;
