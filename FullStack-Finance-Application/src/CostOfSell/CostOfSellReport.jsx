import React, { useRef } from 'react'
import "../assets/css/style.css"
import "../assets/css/CostOfSell/COSReport.css"
import Navbar from '../Component/navbar'
import NavbarOptionAdvan from '../Component/NavbarOptionAdvan'
import CostOfSellReportTable from './CostOfSellReportTable'
import { usePDF } from 'react-to-pdf';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const CostOfSellReport = () => {
  const{ toPDF, targetRef } = usePDF({filename: 'cost-of-sell-report.pdf',
    page: {
      margin: {
        top: 50,
        bottom: 20,
        left: 20,
        right: 30
      },
      format: 'a4',
      orientation: 'landscape'
    }
  });

  const handleGenerateCosPDF = async () => {
    // const input = targetRef.current;

    try {
      await toPDF({});
      // html2canvas(input).then((canvas) => {
      //   const imgData = canvas.toDataURL('image/png')
      //   const pdf = new jsPDF('landscape', 'mm', 'a4');
      //   const imgProps = pdf.getImageProperties(imgData);
      //   const pdfWidth = pdf.internal.pageSize.getWidth();
      //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      //   pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      //   const pdfUrl = pdf.output('bloburl')
      //   window.open(pdfUrl, '_blank');
      // })
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='menu-section'>
      <Navbar/>
      <div className="main-section">
        <NavbarOptionAdvan LinkParam={'/Cost-Of-Sell'}/>
        <h1>COS Report</h1>
        <div className="cos-report">
          <CostOfSellReportTable targetRef={targetRef}/>
        </div>
        <div className="report-output">
          <button onClick={handleGenerateCosPDF}>Create PDF</button>
        </div>
      </div>
    </div>
  )
}

export default CostOfSellReport