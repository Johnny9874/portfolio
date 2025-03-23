import React from 'react';
import '../styles/animations.css'; // Ou le fichier contenant fade-in

const SectionWrapper = ({ id, children }) => {
  return (
    <section id={id} className="fade-in">
      {children}
    </section>
  );
};

export default SectionWrapper;
