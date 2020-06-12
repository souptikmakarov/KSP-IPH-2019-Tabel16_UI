import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { Unkown_Person } from '../models/unknown_person';
import { HttpUtilitiesService } from '../http-utilities.service';
import { API_Response } from '../models/api_response';

@Component({
  selector: 'app-poisearch',
  templateUrl: './poisearch.component.html',
  styleUrls: ['./poisearch.component.css']
})
export class PoisearchComponent implements OnInit {

  constructor(private http: HttpUtilitiesService) { }

  ngOnInit() {
  }

  public uploaderVisibility = "uploader_visible";
  public isSearchComplete = false;
  public resultVisible = false;
  public fileToBeUploaded: any;
  public message: string;
  public imagePath;
  public fileName: string = '';
  imgURL: any;

  public db_person : Person = null;

  public uploaded_person : Unkown_Person = {
    imageUrl: '',
    matchedPersons : []
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

  public runSearch(){
    // this.uploaded_person = new Unkown_Person();
    // this.uploaded_person.imageUrl = this.imgURL;
    // this.uploaderVisibility = "uploader_invisible";
    // this.resultVisible = true;
    // this.http.search(this.fileToBeUploaded).subscribe(
    //   (data: API_Response)=>{
    //     // var info = JSON.parse(data);
    //     // if (info.hasOwnProperty("error")){
    //     //   alert(info['error']);
    //     //   this.uploaderVisibility = "uploader_visible";
    //     //   this.isSearchComplete = false;
    //     //   this.resultVisible = false;
    //     //   return;
    //     // }

    //     var arrestedMatch = new Person();
    //     arrestedMatch.imageUrl = "assets/image_db/arrested wanted" + info['arrested']

    //     this.db_person = new Person();
    //     this.db_person.imageUrl = "assets/" + data + ".jpg";
    //     this.db_person.identity = info['input_embeddings'];
    //     this.db_person.matchPercentage = 80;
    //     this.isSearchComplete = true;
    //   }
    // );
  }

}
