"use client";

const features = [
  "Promise-Based Alerts",
  "Multiple Modal Variants",
  "Built-in Animations",
  "Custom Modal Sizes",
  "Light & Dark Theme Support",
  "Custom Button Text & Icons",
  "Outside Click Dismiss",
  "Fully Customizable Styles",
  "Optional Cancel Icon Support",
  "Flexible Status Types",
  "Global Configuration Support",
  "Support for Emoji & Rich Text",
  "Easy Integration",
  "Zero Dependencies",
  "Headless Hook Support",
];

type FeatureItemProps = {
  children: React.ReactNode;
};

const FeatureItem = ({ children }: FeatureItemProps) => (
  <li className="flex items-center gap-3 font-semibold text-primary text-left">
    <span className="flex items-center justify-center bg-[#e9f8f1] rounded-2xl p-1.5">
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="#12b76a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
    <span className="feature-text">{children}</span>
  </li>
);

const FeaturesSection = () => (
  <section className="animate-fade-in duration-1000 py-8">
    <h2 className="title text-primary text-[1.5rem] mb-6 text-center">
      What Makes <span className="text-secondary">notify-bolt</span> Stand Out?
    </h2>
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
      {features.map((feature, index) => (
        <FeatureItem key={index}>{feature}</FeatureItem>
      ))}
    </ul>
  </section>
);

export default FeaturesSection;
