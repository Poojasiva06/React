import React, { useState, useEffect } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate 2 seconds delay
  }, []);

  if (loading) {
    return <div className="loading">Loading Contact...</div>;
  }

  return (
    <div className="section">
      <h2>Contact Me</h2>
      <p>Email: poojasiva615@gmail.com</p>
      <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/pooja-s615" target="_blank" rel="noopener noreferrer">View Profile</a></p>
      <p>🚀 GitHub: <a href="https://github.com/Poojasiva06/React" target="_blank" rel="noopener noreferrer">Check My Projects</a></p>
    </div>
  );
};

export default Contact;

