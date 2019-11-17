import { Injectable } from '@angular/core';
import { exists } from 'file-exists'
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgUtilitiesService {

  constructor(private httpClient: HttpClient) { }

  public getFileUrl(filename: string, folder: string){
    return "assets/image_db/" + folder + "/" + filename + ".jpg";
    // exists(path, (err, exists) => {
    //     if (exists) {
    //       return path;
    //     } else{
    //       path = "assets/" + folder + "/" + filename + ".png";
    //       exists(path, (err, exists) => {
    //         if (exists) {
    //           return path;
    //         } else{
    //           return "assets/img_not_found.jpg";
    //         }
    //       });
    //     }
    //   });
    // return this.httpClient
    //   .get(path, { observe: 'response', responseType: 'blob' })
    //   .pipe(
    //     map(response => {
    //       return path;
    //     }),
    //     catchError(error => {
    //       path = "assets/image_db/" + folder + "/" + filename + ".png";
    //       return this.httpClient
    //       .get(path, { observe: 'response', responseType: 'blob' })
    //       .pipe(
    //         map(response => {
    //           return path;
    //         }),
    //         catchError(error => {
    //           return "assets/img_not_found.jpg";
    //         })
    //       );
    //     })
    //   );
  }
}
