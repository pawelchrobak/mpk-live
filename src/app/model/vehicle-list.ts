import { MpkVehicle } from './mpk-vehicle';

export class VehicleList {
    private list: Array<MpkVehicle>;

    constructor (list: Array<MpkVehicle>) {
        this.list = list;
    }

    public doesVehicleExistsById(id: number): boolean {
        let result = false;
    
        for ( let vehicle of this.list ) {
          if ( vehicle.id == id ) {
            result = true;
          }
        }
        return result;
      }

    public getVehicleById(id: number): MpkVehicle {
        for ( let vehicle of this.list ) {
          if ( vehicle.id == id ) {
            return vehicle;
          }
        }
      }

    public addVehicle(vehicle: MpkVehicle): MpkVehicle {
        this.list.push(vehicle);
        return vehicle;
      }

    public clearVehicleList(): Array<MpkVehicle> {
        this.list = [];
        return this.list;
    }

    public getVehicleList(): Array<MpkVehicle> {
        return this.list;
    }

}
