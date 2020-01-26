import { MpkLine } from './mpk-line';

export class MpkVehicle {
    public line: MpkLine
    public lat: number; 
    public lng: number;
    public id: number;

    constructor (id: number, line: MpkLine, lat: number, lng: number) {
        this.line = line;
        this.lat = lat;
        this.lng = lng;
        this.id = id;
    }
    
}
