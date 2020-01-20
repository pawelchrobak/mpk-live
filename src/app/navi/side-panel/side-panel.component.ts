import { Component, OnInit } from '@angular/core';
import { MpkDataService } from 'src/app/services/mpk-data.service';
import { ApiResponse } from 'src/app/model/api-response';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  private lineNumbers: Array<string> = [];


  constructor(private mpkDataService: MpkDataService) { }

  ngOnInit() {
    // this.mpkDataService.getAllLineNumbers().subscribe((data: ApiResponse) => {
    //   for (let item of data.result.records) {
    //     this.lineNumbers.push(item['Nazwa_Linii']);
    //   }
    // });

    this.mpkDataService.getLocationDataAlternative(['146'],['32']).subscribe((data) => {
      console.log(data);
      for (let item of data) {
        this.lineNumbers.push(item['name']);
      }
    })
  }

}
