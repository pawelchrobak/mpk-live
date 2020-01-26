import { Component, OnInit } from '@angular/core';
import { MpkDataService } from 'src/app/services/mpk-data.service';

@Component({
  selector: 'app-line-picker',
  templateUrl: './line-picker.component.html',
  styleUrls: ['./line-picker.component.scss']
})
export class LinePickerComponent implements OnInit {

  private busLines: Array<string> = [];
  private tramLines: Array<string> = [];
  private activeLines: Array<string> = [];
  private busLinesStatus: Array<object> = [];
  private tramLinesStatus: Array<object> = [];

  test(line) {
    console.log(line)
    if ( line.active ) {
      line.active = false;
    } else {
      line.active = true;
    }
  }

  constructor(private mpkService: MpkDataService) {
    this.busLines = this.mpkService.getAllBusNumbers();
    this.tramLines = this.mpkService.getAllTramNumbers();

    for (let line of this.busLines ) {
      this.busLinesStatus.push({lineNo: line, active: true});
    }

    for (let line of this.tramLines ) {
      this.tramLinesStatus.push({lineNo: line, active: true});
    }

  }


  

  ngOnInit() {


  }

}
