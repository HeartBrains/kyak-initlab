import { BRAND_BG_COLOR } from "../constants";

const CTAButton = ({
  ghost = false,
  children,
  className,
}: {
  ghost?: boolean;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`rounded-full w-fit p-2 px-8 my-6 font-medium ${
        ghost
          ? "border-gray-950 border bg-inherit text-gray-950"
          : BRAND_BG_COLOR
      } ${className}
`}
    >
      {children ?? "Do this action"}
    </button>
  );
};

export default CTAButton;
