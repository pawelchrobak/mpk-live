import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, marker, divIcon } from 'leaflet';
import { MpkDataService } from 'src/app/services/mpk-data.service';
import { MpkVehicle } from 'src/app/model/mpk-vehicle';


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

  private drawVehiclesToMap(list: Array<MpkVehicle>) {
    this.vehicleMarkers = [];
    
    for (let vehicle of list) {
      let newIcon = divIcon({className: 'my-div-icon', html: vehicle.line.lineNo});
      let newMarker = marker([vehicle.lat,vehicle.lng], {icon: newIcon} );
      this.vehicleMarkers.push(newMarker)
    }
  }


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
          this.mpkDataService.updateLocationData();
          break;
        case 'vehicle-list-update':
          this.drawVehiclesToMap(this.mpkDataService.getAllVehicles());
          break;
      }
    })

    this.mpkDataService.updateLocationData();

    // this.vehicleMarkers.push(marker([51.11, 17.09], {icon: myIcon}));
    // this.vehicleMarkers.push(marker([51.11, 17.06], {icon: myIcon}));

    // console.log(this.mpkLayer);
    // marker([51.11, 17.082222], {icon: myIcon}).addTo(this.mpkLayer);
  }

}
