import { AppHeader } from "./components/Header";
import {CPHero} from "./components/CPHero";
import {CPFeatures} from "./components/CPFeatures";
import {CPFaq} from "./components/CPFaq";
import {CPContact} from "./components/CPContact";
import {CPFooter} from "./components/CPFooter";

function App() {
  return (
    <div className="App">
      <AppHeader />
        <CPHero />
        <CPFeatures />
        <CPFaq />
        <CPContact />
        <CPFooter />
    </div>
  );
}

export default App;
