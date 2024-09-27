import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpService) { }

  getNotesApiCall(endPoint:string){
    return this.http.getApiCall(endPoint)
  }

  createNoteApiCall(endPoint:string, noteData:any){
    return this.http.postApiCall(endPoint, noteData, true);
  }

  deleteNoteById(endPoint: string, noteId: string) {
    return this.http.deleteApiCall(`${endPoint}/${noteId}`);
  }

  updateNoteById(endPoint: string, noteId: string, updatedData: any) {
    return this.http.putApiCall(`${endPoint}/${noteId}`, updatedData);
  }

  archiveNoteById(endPoint: string, noteId: string) {
    return this.http.putApiCall(`${endPoint}/achive/${noteId}`, {isarchive: true});
  }

  trashNoteById(noteId: string):Observable<any> {
    return this.http.putApiCall(`router/delete/${noteId}`, {isdeleted: true});
  }
}
