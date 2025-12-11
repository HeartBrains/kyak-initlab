export const HeaderOne = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={`text-5xl lg:text-7xl font-bold ${className}`}>
      {children}
    </h1>
  );
};

export const HeaderTwo = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={`text-3xl lg:text-5xl font-medium ${className}`}>
      {children}
    </h2>
  );
};

export const HeaderThree = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) => {
  return (
    <h3 {...props} className={`font-bold ${className}`}>
      {children}
    </h3>
  );
};

export const HeaderFour = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h4 className={`text-[22px] ${className} `}>{children}</h4>;
};

export const HeaderFive = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h5 className={`${className} `}>{children}</h5>;
};

export const SubHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={`text-base lg:text-xl font-medium ${className}`}>
      {children}
    </p>
  );
};

export const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={`text-lg lg:text-lg text-gray-500 ${className}`}>
      {children}
    </p>
  );
};

export const Description = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={`text-sm lg:text-base ${className}`}>{children}</p>;
};
