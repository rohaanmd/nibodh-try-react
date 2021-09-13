import React, { Component } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import Pdff from "../image/frame.pdf"
export default class pdf extends Component {
    constructor(props){
        super(props);
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }
    render() {
        return (
            <div>
                <Document
          file={Pdff}
        
    >
        </Document>
            </div>
        )
    }
}
