import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <>
      <hr
        className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"
      />
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        {children}
      </h2>
    </>
  );
}
