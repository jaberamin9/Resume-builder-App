'use client'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = () => {
    const input = document.getElementById('cv');

    html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('download.pdf');
    });
};

export const handleCapture = () => {
    const captureElement = document.getElementById('cv');

    if (!captureElement) return;

    html2canvas(captureElement).then(canvas => {
        const img = canvas.toDataURL();
        const fullScreenImg = new Image();
        fullScreenImg.src = img;

        const fullScreenContainer = document.createElement('div');
        fullScreenContainer.style.position = 'fixed';
        fullScreenContainer.style.top = '0';
        fullScreenContainer.style.left = '0';
        fullScreenContainer.style.width = '100%';
        fullScreenContainer.style.height = '100%';
        fullScreenContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        fullScreenContainer.style.display = 'flex';
        fullScreenContainer.style.alignItems = 'center';
        fullScreenContainer.style.justifyContent = 'center';
        fullScreenContainer.style.zIndex = '9999';

        fullScreenImg.style.maxWidth = '100%';
        fullScreenImg.style.maxHeight = '100%';

        fullScreenContainer.appendChild(fullScreenImg);
        document.body.appendChild(fullScreenContainer);

        fullScreenContainer.addEventListener('click', () => {
            document.body.removeChild(fullScreenContainer);
        });
    });
};