import React from "react";
import "../css/resume.css";

function Resume() {
  const handleDoubleClick = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "YiHao_Resume.pdf"; // optional custom name
    link.click();
  };

  return (
    <div className="resume-container">
      <h2 onDoubleClick={handleDoubleClick} className="resume-heading">
        My Resume
      </h2>

      <iframe
        src="/resume.pdf"
        width="100%"
        height="800px"
        title="Resume"
        style={{ border: "none", borderRadius: "12px" }}
      />
    </div>
  );
}

export default Resume;
