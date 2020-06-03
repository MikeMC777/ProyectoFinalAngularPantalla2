import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class ColeserviceService {
  constructor(private firestore: AngularFirestore) {}
  LeerAlumno(estado) {
    return this.firestore
      .collection("alumno", (ref) => ref.where("estado", "==", estado))
      .snapshotChanges();
  }
}
