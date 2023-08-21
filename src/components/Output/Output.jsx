import AgeDisplay from "./AgeDisplay";

const Output = ({ years, months, days }) => {
  return (
    <section className="flex flex-col pt-16 text-[56px] italic font-extrabold leading-[1.1em] tracking-[-0.02em] lg:pt-12 lg:text-[104px]">
      <AgeDisplay label="years" value={years} />
      <AgeDisplay label="months" value={months} />
      <AgeDisplay label="days" value={days} />
    </section>
  );
};

export default Output;
