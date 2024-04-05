import FeatureCard from "@/components/featureShowcase/item";
import { type FunctionComponent } from "react";

interface FeatureShowcaseProps {
  features: {
    title: string;
    description: string;
    icon: JSX.Element;
    isAvailable: boolean;
  }[];
}

const FeatureShowcase: FunctionComponent<FeatureShowcaseProps> = ({
  features,
}) => {
  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
};

export default FeatureShowcase;
