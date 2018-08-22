import { Component, OnInit, ViewChild, ElementRef,ViewContainerRef } from '@angular/core';
import { RecogniseService } from './recognise.component.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-recognise',
  templateUrl: './recognise.component.html',
  styleUrls: ['./recognise.component.css']
})
export class RecogniseComponent implements OnInit {

  name:any
  onOff:Boolean;
  public localstream:any;
  public loading:any=false;

  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  public captures: Array<any>;

  public constructor(public recogniseService:RecogniseService,public toastr: ToastsManager,vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);  
    this.captures = [];
  }

  public ngOnInit() { }

  public ngAfterViewInit() {

  }
  recognise(){
    this.loading = true;
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    let base64 = this.canvas.nativeElement.toDataURL("image/png")
    console.log(base64);
    this.recogniseService.recognise(base64,"saif").subscribe((data) => {
      this.toastr.success( data['images'][0]['transaction']['subject_id'], 'Welcome');
      console.log('data', data);
      this.loading = false;
  },
  (error) => {
    this.loading = false;
      // alert("Login not Succesfull")
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

}
