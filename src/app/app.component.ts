import { Component } from "@angular/core";
import { ColeserviceService } from "../app/service/coleservice.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "proyecto1";
  alumnos: any;
  
  estado: string = "listo";
 
  constructor(private service: ColeserviceService) {}
  ngOnInit(): void {
    this.ConsularAlumnos();
  }
  ConsularAlumnos() {
    this.service.LeerAlumno(this.estado).subscribe((data) => {
      console.log(data);
      this.alumnos = data.map((e) => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          nombre: e.payload.doc.data()["nombre"],
          seccion: e.payload.doc.data()["seccion"],
          estado: e.payload.doc.data()["estado"],
          dnipadre: e.payload.doc.data()["dnipadre"],
          carril: e.payload.doc.data()["carril"],
        };
      });
    });
  }
}
