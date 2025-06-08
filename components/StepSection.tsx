import StepCard from "./StepCard";

const steps = [
  {
    title: "Step 1",
    subtitle: "Install the PillSync Box",
    description: "Set up the smart box and connect it via Wi-Fi or Bluetooth",
    iconSrc: "/svgs/install-icon.svg",
  },
  {
    title: "Step 2",
    subtitle: "Load your medications",
    description: "Tear off the packaging and load the pill cassette roll into PillSync",
    iconSrc: "/svgs/pill-icon.svg",
  },
  {
    title: "Step 3",
    subtitle: "Receive timely alerts",
    description: "After loading, you will get an app alert and the machine will beep",
    iconSrc: "/svgs/time-icon.svg",
  },
];

export default function StepSection() {
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
