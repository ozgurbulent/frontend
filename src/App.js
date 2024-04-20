import React from 'react';

function App() {
  const handleDownloadPdf = () => {
    // This is where we define the URL to the PDF file
    const pdfUrl = 'http://localhost:5000/pdfs/sample.pdf';

    // This opens the PDF in a new browser tab
    window.open(pdfUrl, '_blank');
  };

  return (
    <div>
      <h1>Download PDF</h1>
      <button onClick={handleDownloadPdf}>Download Sample PDF</button>
    </div>
  );
}

export default App;
