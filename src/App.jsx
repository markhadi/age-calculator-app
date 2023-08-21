import AgeForm from "./components/AgeForm/AgeForm";
import Output from "./components/Output/Output";

import { useState } from "react";

const App = () => {
  const [ageResult, setAgeResult] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  return (
    <main>
      <AgeForm setAgeResult={setAgeResult} />
      <Output
        years={ageResult.years}
        months={ageResult.months}
        days={ageResult.days}
      />
    </main>
  );
};

export default App;
