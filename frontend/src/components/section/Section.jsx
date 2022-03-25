import React from "react";

const Section = ({ heading, subHeading, children }) => (
  <section className="container px-4 py-5">
    <h1 className="text-center">{heading}</h1>
    <p className="text-center text-secondary mb-5">{subHeading}</p>
    {children}
  </section>
);

export default Section;
