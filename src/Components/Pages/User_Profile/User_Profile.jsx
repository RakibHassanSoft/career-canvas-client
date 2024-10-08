
import html2canvas from "html2canvas"; // Make sure to install this package
import jsPDF from "jspdf"; // Make sure to install this package
import Resume1 from "../Resume_Templates/templatesColllection/Resume1";
import { useContext, useRef } from "react";
import Resume2 from "../Resume_Templates/templatesColllection/Resume9";
import { AuthContext } from "../../Providers/AuthProvider";


const User_Profile = () => {
  // Retrieve template ID from your hook
  // let { temId } = getSkills();
  // let temRealId = parseInt(temId);
  const { resumeId, setResumeId } = useContext(AuthContext)
  console.log(resumeId)

  // Create a ref to point to the content we want to download as PDF
  const inputRef = useRef();

  // Function to download the content as a PDF using html2canvas and jsPDF
  const downloadPDF = () => {
    console.log("Button clicked, generating PDF...");

    const input = inputRef.current;
    console.log(input)// Reference to the HTML element
    const dpi = 300; // Set DPI to 300 for high resolution

    html2canvas(input, {
      scale: dpi / 96, // Scale canvas to 300 DPI (default is 96 DPI)
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Create jsPDF object with A4 size (in mm)
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4", // A4 size in millimeters (210 x 297 mm)
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

      let position = 0;
      let heightLeft = imgHeight;

      // Add the first page
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST");
      heightLeft -= 297; // A4 height in mm

      // Add more pages if the content exceeds one page
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= 297;
      }

      // Save the PDF
      pdf.save("template1-high-res-a4.pdf");
    });
  };

  // Dynamically render the correct resume template
  const renderResumeTemplate = () => {
    if (resumeId === 1) {
      return <Resume1 />;
    } else if (resumeId === 2) {
      return <Resume2 />;
    } else if (resumeId === 3) {
      return <p>Hello</p>;
    } else {
      return <h1>Loading.....</h1>;
    }
  };

  return (
    <div className="w-8/12 m-auto">
      {/* Wrap the content you want to print with a div and add ref */}
      <div ref={inputRef}>
        {renderResumeTemplate()}
      </div>

      {/* Button to trigger the PDF download */}
      <button
        onClick={downloadPDF}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default User_Profile;
