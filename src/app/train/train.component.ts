import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TrainService } from './train.component.service'

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
  name:any
  onOff:Boolean;
  public localstream:any;

  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  public captures: Array<any>;

  public constructor(public trainService:TrainService ) {
      this.captures = [];
  }

  public ngOnInit() { }

  public ngAfterViewInit() {

  }
  train(){
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    let base64 = this.canvas.nativeElement.toDataURL("image/png")
    console.log(base64);
    this.trainService.train(base64,this.name).subscribe((data) => {
      console.log('data', data);

  },
  (error) => {
      
  });

  }
  modelChanged(data){
    if(this.onOff)
    { console.log("vidd onn", this.onOff)
      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
          this.video.nativeElement.src = window.URL.createObjectURL(stream);
          this.video.nativeElement.play();
          this.localstream = stream;
      });
    }
  }
  else{
    console.log("Vid off",this.onOff);
    this.video.nativeElement.pause()
    this.video.nativeElement.src = "";
    this.localstream = this.localstream.getTracks()[0];
    this.localstream.stop();
  }
  }

  public capture() {
      var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
      this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
      let base64 = this.canvas.nativeElement.toDataURL("image/png")
      console.log(base64);
  }
}
