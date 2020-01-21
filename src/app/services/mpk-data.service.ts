import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiResponseVehicle } from '../model/api-response-vehicle';
import { MpkLine } from '../model/mpk-line';

@Injectable({
  providedIn: 'root'
})
export class MpkDataService {

  private URL_API: string = 'http://pasazer.mpk.wroc.pl/position.php';
  
  private BUS_LINES: Array<string> = ['A','C','D','K','N','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','118','119','120','121','122','124','125','126','127','128','129','130','131','132','133','134','136','140','141','142','143','144','145','146','147','148','149','150','206','240','241','242','243','245','246','247','248','249','250','251','253','255','257','259','319','325','602','607','609','612','715'];
  private TRAM_LINES: Array<string> = ['0L','0P','1','2','3','4','5','6','7','8','9','10','11','14','15','16','17','20','23','24','31','32','33'];

  private ACTIVE_LINES: Array<MpkLine> = [];

  public getAllBusNumbers(): Array<string> {
    return this.BUS_LINES;
  }

  public getAllTramNumbers(): Array<string> {
    return this.TRAM_LINES;
  }

  public stateUpdate = new EventEmitter();

  public Reload() {
    this.stateUpdate.emit('reload');
    console.log('reload event emitted')
  }

  public getLocationDataAlternative(bus: Array<string>, tram: Array<string>) {
    let params = new HttpParams({ fromObject: {'busList[bus][]': bus, 'busList[tram][]': tram} })
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded; charset=UTF-8',
      })
    };

    return this.http.post<Array<ApiResponseVehicle>>(this.URL_API,params,httpOptions)
  }

  constructor(private http: HttpClient) { }
}
