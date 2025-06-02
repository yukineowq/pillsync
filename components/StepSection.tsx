import StepCard from "./StepCard";

export default function StepsSection() {
  const steps = [
    {
      title: "Step 1",
      description:
        "Install the medicine package",
      iconSrc: "/svgs/pill-icon.svg",
    },
    {
      title: "Step 2",
      description:
        "Install the medicine package",
      iconSrc: "/svgs/pill-icon.svg",
    },
    {
      title: "Step 3",
      description:
        "Install the medicine package",
      iconSrc: "/svgs/pill-icon.svg",
    },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-14 py-8 lg:py-16">
      {steps.map((step, i) => (
        <div key={i} className="md:flex-1 min-w-0">
          <StepCard {...step} />
        </div>
      ))}
    </div>
  );
}
