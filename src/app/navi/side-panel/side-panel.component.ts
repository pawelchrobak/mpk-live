import { Component, OnInit } from '@angular/core';
import { MpkDataService } from 'src/app/services/mpk-data.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  private busLineNumbers: Array<string> = [];
  private tramLineNumbers: Array<string> = [];

  reload() {
    console.log('called for reload...')
    this.mpkDataService.Reload();
  }

  startAutoRefresh() {
    this.mpkDataService.startAutoUpdate();
  }

  stopAutoRefresh() {
    this.mpkDataService.stopAutoUpdate();
  }

  constructor(private mpkDataService: MpkDataService) { }

  ngOnInit() {
    for (let no of this.mpkDataService.getAllBusNumbers()) {
      this.busLineNumbers.push(no);
    }

    for (let no of this.mpkDataService.getAllTramNumbers()) {
      this.tramLineNumbers.push(no);
    }

    // this.mpkDataService.getLocationDataAlternative(['146'],['32']).subscribe((data) => {
    //   console.log(data);
    //   for (let item of data) {
    //     this.lineNumbers.push(item['name']);
    //   }
    // })
  }

}
