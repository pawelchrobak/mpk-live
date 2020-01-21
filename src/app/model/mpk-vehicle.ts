import { MpkLine } from './mpk-line';

export class MpkVehicle {
    public line: MpkLine
    public lat: number; 
    public lng: number;

    constructor (line: MpkLine, lat: number, lng: number) {
        this.line = line;
        this.lat = lat;
        this.lng = lng;
    }
    
}
