import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { INgxSelectOption } from 'ngx-select-ex';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  pdfObject: any;
  UrlFile:any;
  /* Variables utiles desde el Back 
    Cuando el sistema este listo, cambiarlo por las XXXX*/
  nombreDoctor: any;
  nombrePaciente: any;
  nombreEstudio: any;
  Fecha: any;

  public ngxControl = new FormControl();
 
  private _ngxDefaultTimeout;
  private _ngxDefaultInterval;
  private _ngxDefault

  public items: string[] = [
    'John',
    'Emma',
    'Michael',
    'Olivia',
    'Daniel',
    'Sophia',
    'Matthew',
    'Isabella',
    'David',
    'Emily',
    'Andrew',
    'Mia',
    'James',
    'Ava',
    'Joseph',
    'Charlotte',
    'William',
    'Amelia',
    'Benjamin',
    'Abigail'
  ];
  AddPatientForm: FormGroup;
  Pacientes: any;
  Reportes: any;

  constructor(
    public fb: FormBuilder
  ) {
    /* - - - - Importante para el select como se solicito - - - - -  */
    this._ngxDefaultTimeout = setTimeout(() => {
      this._ngxDefaultInterval = setInterval(() => {
          const idx = Math.floor(Math.random() * (this.items.length - 1));
          this._ngxDefault = this.items[idx];
          // console.log('new default value = ', this._ngxDefault);
      }, 2000);
  }, 2000);
    this.AddPatientForm = this.fb.group({
      nombreReport: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      report: ['', [Validators.required]],
      paciente: ['']
    });
  }

  ngOnInit(){
    // this.Conexion.getReportes().subscribe(answer =>{
    //   console.log(answer);
    //   this.Pacientes=answer;
    // })
  }

  borrarReporte(id:number,iControl:any){
    console.log(id)
    console.log(iControl)
    if(window.confirm("¿Está seguro de borrar el registro?")){
    // this.conexion.deleteReporte().subscribe((answer)=>{
    //   this.Pacientes.splice(iControl,1);
    // })
    }
  }

  saveData(){
    console.log(this.AddPatientForm.value);
  }

  /* Funcion para generar el pdf */
  async generarPDF(){
    const reporte = {
      content: [
        {
          text: 'IPS UNIVERSITARIA DE COLOMBIA',
          style: 'header1'
        },
        {
          text: [
            'Dr XXXXX'
            ],
          style: 'contentS'
        },
        {
          text: 'Informe Radiologo',
          bold: true,
          fontSize:18
        },
        {
            text: [{text: 'Paciente:', bold:true},' XXXXX','\n'],
            style: 'contentData'
        },
        {
            text: [{text: 'Estudio:', bold:true},' XXXXX'],
            style: 'contentData'
        },
        {
            text: [{text: 'Fecha:', bold:true},' XXXXX'],
            style: 'contentData'
        },
        {
            text: 'Aqui va el contenido del reporte.',
            style: 'content'
        },
        {
          columns: [
            {
              width: 'auto',
              qr: 'XXXX',
              alignment: 'left',
              margin: [10, 25, 0, 0]
            }
          ]
        }
      ],
      footer: {
      columns: [
        {
          text: 'IPS UNIVERSITARIA DE COLOMBIA \n Calidad y precisión en cada diagnóstico.',
          alignment: 'center',
          bold: true
        }
      ]
    },
      styles: {
        header1:{
          fontSize:20,
          bold: true,
          alignment: 'center'
        },
        contentData: {
          margin: [0, 15, 0, 0],
          fontSize: 12,
          bold: false,
          alignment: 'justify'
        },
        content: {
          margin: [0, 20, 40, 20],
          fontSize: 12,
          bold: false,
          alignment: 'justify'
        },
        contentS: {
          margin: [40, 20, 40, 20],
          fontSize: 12,
          bold: false,
          italics: true,
          alignment: 'center'
        }
      }
    };
    this.pdfObject = pdfMake.createPdf(reporte);
    this.pdfObject.download();
    this.FileToBase64(this.pdfObject);
  }
  FileToBase64(pdf){
    pdf.getDataUrl(async (result: string) => {
      var base64result = (<string>result).split(',')[1];
    this.UrlFile=base64result;
    let datos = {
      file: this.UrlFile,
      correo: localStorage.getItem('correo'),
      nombre: localStorage.getItem('nombreCompleto')
    };
    /* Conexión para guardar el archivo */
    // this._ConexionService.SendFile(datos).subscribe((res: any) => {
    //   console.log("Archivo enviado correctamente")
    // }, (err) => {
    //   console.log(err);
    // });
     });
   }
   getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL('image/png');
        resolve(dataURL);
      };
      img.onerror = error => {
        reject(error);
      };
      img.src = url;
    });
  }
}
