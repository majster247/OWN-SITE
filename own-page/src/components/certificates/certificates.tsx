// Cert.tsx
import React, { useState } from "react";
import "./certificates.css";
import Cert1 from "./cert1.png";
import Cert2 from "./cert2.png";
import Cert3 from "./cert3.png";

const Cert: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const certificates = [
    { src: Cert1, alt: "Certificate 1" },
    { src: Cert2, alt: "Certificate 2" },
    { src: Cert3, alt: "Certificate 3" },
  ];

  return (
    <div className="baobab">
      <h2>Certificates</h2>
      <div className="cert">
        {certificates.map((certificate, index) => (
          <img
            key={index}
            src={certificate.src}
            alt={certificate.alt}
            onClick={() => handleImageClick(certificate.src)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected Certificate" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cert;
