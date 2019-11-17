import { Component, OnInit } from '@angular/core';
import { HttpUtilitiesService } from '../http-utilities.service';
import { ImgUtilitiesService } from '../img-utilities.service'
import { Person } from '../models/person';
import { API_Response, Search_Result } from '../models/api_response';
import { pipe } from '@angular/core/src/render3';
import { HttpUrlEncodingCodec } from '@angular/common/http';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor(private http: HttpUtilitiesService, private imgUtil: ImgUtilitiesService) { }

  ngOnInit() {
  }

  public imagePath;
  imgURL: any;
  public message: string;
  public fileName: string = '';
  public fileToBeUploaded: any;
  public persons: Person[] = [];
  public loading = false;
//   tempPerson: Person = {
//    identity: "Ravi Verma",
//    matchPercentage: 95,
//    imageUrl: 'https://picsum.photos/id/487/200/300'
//  };
  public setMessageNull(){
    this.message = null;
  }

  public preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    this.fileToBeUploaded = files[0];
    var reader = new FileReader();
    this.imagePath = files;
    this.fileName = files[0].name;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  public getFilePath(filename: string, folder: string){
    return "assets/image_db/" + folder + "/" + encodeURIComponent(filename) + ".jpg";
  }

  public runSearch(){
    // this.persons.push(this.tempPerson);
    // this.persons.push(this.tempPerson);
    // this.persons.push(this.tempPerson);
    // this.persons.push(this.tempPerson);
    // this.persons.push(this.tempPerson);
    // return;
    var bestMatches = [], alternateMatches = [];
    this.loading = true;
    this.http.search(this.fileToBeUploaded).subscribe(
      async (data: API_Response)=>{
        this.persons = [];
        if(data.Us != undefined){
          var us_db_res = data.Us;
          if(Object.entries(us_db_res.bestMatch).length !== 0){
            // var p1 = null;
            var best_mat = us_db_res.bestMatch;
            p1 = new Person();
            p1.identity = best_mat.name;
            p1.imageUrl = this.getFilePath(best_mat.name, "us");
            p1.matchPercentage = Number.parseFloat(best_mat.pc) < 0 ? 0 : Number.parseFloat(best_mat.pc);
            p1.fromDatabase = "Personal";
            p1.matchType = "Best Match";
            p1.database_type = "database_personal";
            p1.crimeNo = "NA";
            p1.address = "Bengaluru";
            bestMatches.push(p1);
          }

          if(us_db_res.alternateMatches != undefined && us_db_res.alternateMatches.length != 0){
            var p1 = null;
            var self = this;
            us_db_res.alternateMatches.forEach(async function(alt_mat){
              p1 = new Person();
              p1.identity = alt_mat.name;
              p1.imageUrl = self.getFilePath(alt_mat.name, "us");
              p1.matchPercentage = Number.parseFloat(alt_mat.pc) < 0 ? 0 : Number.parseFloat(alt_mat.pc);
              p1.fromDatabase = "Personal";
              p1.matchType = "Alternate Match";
              p1.database_type = "database_personal";
              p1.crimeNo = "NA";
              p1.address = "Bengaluru";
              alternateMatches.push(p1);
            });
          }
        }

        if(data.arrested != undefined){
          var arr_db_res = data.arrested;
          if(Object.entries(arr_db_res.bestMatch).length !== 0){
            var best_mat = arr_db_res.bestMatch;
            p1 = new Person();
            p1.identity = best_mat.name;
            p1.imageUrl = this.getFilePath(best_mat.name, "arrested");
            p1.matchPercentage = Number.parseFloat(best_mat.pc) < 0 ? 0 : Number.parseFloat(best_mat.pc);
            p1.fromDatabase = "Arrested";
            p1.database_type = "database_arrested";
            p1.matchType = "Best Match";
            p1.crimeNo = "NA";
            p1.address = "Bengaluru";
            bestMatches.push(p1);
          }
          
          if(arr_db_res.alternateMatches != undefined && arr_db_res.alternateMatches.length != 0){
            var p1 = null;
            var self = this;
            arr_db_res.alternateMatches.forEach(function(alt_mat){
              p1 = new Person();
              p1.identity = alt_mat.name;
              p1.imageUrl = self.getFilePath(alt_mat.name, "arrested");
              p1.matchPercentage = Number.parseFloat(alt_mat.pc) < 0 ? 0 : Number.parseFloat(alt_mat.pc);
              p1.fromDatabase = "Arrested";
              p1.database_type = "database_arrested";
              p1.matchType = "Alternate Match";
              p1.crimeNo = "NA";
              p1.address = "Bengaluru";
              alternateMatches.push(p1);
            });
          }
        }

        if(data.wanted != undefined){
          var wan_db_res = data.wanted;
          if(Object.entries(wan_db_res.bestMatch).length !== 0){
            var best_mat = wan_db_res.bestMatch;
            p1 = new Person();
            p1.identity = best_mat.name;
            p1.imageUrl = this.getFilePath(best_mat.name, "wanted");
            p1.matchPercentage = Number.parseFloat(best_mat.pc) < 0 ? 0 : Number.parseFloat(best_mat.pc);
            p1.fromDatabase = "Wanted";
            p1.database_type = "database_wanted";
            p1.matchType = "Best Match";
            p1.crimeNo = "NA";
            p1.address = "Bengaluru";
            bestMatches.push(p1);
          }
          
          if(wan_db_res.alternateMatches != undefined && wan_db_res.alternateMatches.length != 0){
            var p1 = null;
            var self = this;
            wan_db_res.alternateMatches.forEach(function(alt_mat){
              p1 = new Person();
              p1.identity = alt_mat.name;
              p1.imageUrl = self.getFilePath(alt_mat.name, "wanted");
              p1.matchPercentage = Number.parseFloat(alt_mat.pc) < 0 ? 0 : Number.parseFloat(alt_mat.pc);
              p1.fromDatabase = "Wanted";
              p1.database_type = "database_wanted";
              p1.matchType = "Alternate Match";
              p1.crimeNo = "NA";
              p1.address = "Bengaluru";
              alternateMatches.push(p1);
            });
          }
        }
        var self = this;
        bestMatches.forEach(function(mat){
          self.persons.push(mat);
        });
        alternateMatches.forEach(function(mat){
          self.persons.push(mat);
        });
        this.loading = false;
      }
    );
  }

}
