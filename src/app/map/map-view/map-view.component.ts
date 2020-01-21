import { Component, OnInit } from '@angular/core';
import { latLng, LatLng, tileLayer, marker, divIcon } from 'leaflet';
import { MpkDataService } from 'src/app/services/mpk-data.service';
import { ApiResponse } from 'src/app/model/api-response';
import { MpkVehicle } from 'src/app/model/mpk-vehicle';
import { MpkLine } from 'src/app/model/mpk-line';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  private options: any;
  private mpkLayer: any;
  private vehicleMarkers: Array<any> = [];

  constructor(private mpkDataService: MpkDataService) { }

  ngOnInit() {
    this.options = {
      layers: [
        // tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
        tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', { maxZoom: 18 })

        
      ],
      zoom: 13,
      center: latLng(51.11, 17.022222)

      
    };

    this.mpkDataService.stateUpdate.subscribe((event) => {
      switch (event) {
        case 'reload':
          console.log('got event "reload"');
          break;
      }
    })


    // this.mpkDataService.getLocationData().subscribe((data: ApiResponse) => {
    //   for (let record of data.result.records) {
    //     let line = record['Nazwa_Linii'];
    //     let lng = record['Ostatnia_Pozycja_Dlugosc'];
    //     let lat = record['Ostatnia_Pozycja_Szerokosc']

    //     let newIcon = divIcon({className: 'my-div-icon', html: line})

    //     let newMarker = marker([lat,lng], {icon: newIcon} );
    //     this.vehicleMarkers.push(newMarker)
    //   }
    //   // console.log(data);
    // })

    this.mpkDataService.getLocationDataAlternative(this.mpkDataService.getAllBusNumbers(),this.mpkDataService.getAllTramNumbers()).subscribe((data) => {
      console.log(data);
      for (let item of data) {

        let newVehicle = new MpkVehicle(new MpkLine(item.name,item.type),item.x,item.y)

        let newIcon = divIcon({className: 'my-div-icon', html: newVehicle.line.lineNo})

        let newMarker = marker([newVehicle.lat,newVehicle.lng], {icon: newIcon} );
        this.vehicleMarkers.push(newMarker)
      }
    })

    let myIcon = divIcon({className: 'my-div-icon', html: "123"});
    this.mpkLayer = marker([51.11, 17.022222], {icon: myIcon});

    // this.vehicleMarkers.push(marker([51.11, 17.09], {icon: myIcon}));
    // this.vehicleMarkers.push(marker([51.11, 17.06], {icon: myIcon}));

    // console.log(this.mpkLayer);
    // marker([51.11, 17.082222], {icon: myIcon}).addTo(this.mpkLayer);
  }

}
