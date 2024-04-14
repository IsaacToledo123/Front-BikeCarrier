import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs != pdfFonts.pdfMake.vfs;
@Component({
    selector: 'app-costos',
    standalone: true,
    templateUrl: './costos.component.html',
    styleUrl: './costos.component.css',
    imports: [NavbarComponent, FooterComponent]
})
export class CostosComponent {
    generatePDF() {
        const documentDefinition = {
          content: [
            '¡Hola mundo! Este es un PDF generado desde Angular.'
          ]
        };
        
        pdfMake.createPdf(documentDefinition).open();
      }
    
}
