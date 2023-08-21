import AgeInput from "./AgeInput";
import IconArrow from "../../assets/images/icon-arrow.svg";
import { useState } from "react";

const AgeForm = ({ setAgeResult }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errors, setErrors] = useState({ day: "", month: "", year: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const result = calculateAge(day, month, year);

      setAgeResult(result);
    }
  };

  const validateDate = (day, month, year) => {
    const inputDate = new Date(year, month - 1, day);
    if (
      inputDate.getDate() !== parseInt(day) ||
      inputDate.getMonth() + 1 !== parseInt(month) ||
      inputDate.getFullYear() !== parseInt(year)
    ) {
      return false;
    }
    return true;
  };

  const validate = () => {
    let tempErrors = { day: "", month: "", year: "" };
    const currentYear = new Date().getFullYear();

    if (!day) tempErrors.day = "This field is required";
    else if (!/^(0?[1-9]|[12][0-9]|3[01])$/.test(day))
      tempErrors.day = "Must be a valid day";

    if (!month) tempErrors.month = "This field is required";
    else if (!/^(0?[1-9]|1[0-2])$/.test(month))
      tempErrors.month = "Must be a valid month";

    if (!year) tempErrors.year = "This field is required";
    else if (!/^[0-9]{4}$/.test(year))
      tempErrors.year = "Year must be 4 digits";
    else if (parseInt(year) > currentYear)
      tempErrors.year = "Must be in the past";
    else if (!validateDate(day, month, year))
      tempErrors.day = "The date is invalid";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const calculateAge = (day, month, year) => {
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    let ageYear = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonth = currentDate.getMonth() - birthDate.getMonth();
    let ageDay = currentDate.getDate() - birthDate.getDate();

    if (ageDay < 0) {
      ageMonth--;
      ageDay += new Date(year, month, 0).getDate();
    }

    if (ageMonth < 0) {
      ageYear--;
      ageMonth += 12;
    }

    return {
      years: ageYear,
      months: ageMonth,
      days: ageDay,
    };
  };

  return (
    <form action="#" method="post" id="dateForm" onSubmit={handleSubmit}>
      <div className="flex gap-4 text-smokey-grey font-bold sm:gap-8">
        <AgeInput
          type="text"
          name="day"
          id="day"
          label="day"
          placeholder="DD"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          error={errors.day}
        />
        <AgeInput
          type="text"
          name="month"
          id="month"
          label="month"
          placeholder="MM"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          error={errors.month}
        />
        <AgeInput
          type="text"
          name="year"
          id="year"
          label="year"
          placeholder="YYYY"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          error={errors.year}
        />
      </div>
      <button type="submit" className="btn">
        <img src={IconArrow} alt="submit" className="h-6 lg:h-11" />
      </button>
    </form>
  );
};

export default AgeForm;
