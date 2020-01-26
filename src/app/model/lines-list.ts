import { MpkLine } from './mpk-line';

export class LinesList {
    private list: Array<MpkLine>

    constructor (list: Array<MpkLine>) {
        this.list = list;
    }


    public doesLineExistByName(name: string): boolean {
        let result = false;

        for (let line of this.list) {
            if ( line.lineNo == name.toUpperCase() ) {
                result = true;
            }
        }
        return result;
    }

    public getLineByName(name: string): MpkLine {
        for (let line of this.list) {
            if ( line.lineNo == name.toUpperCase() ) {
                return line;
            }
        }
    }

    public addLine(line: MpkLine): MpkLine {
        this.list.push(line);
        return line;
    }

    public clearLinesList(): Array<MpkLine> {
        this.list = [];
        return this.list;
    }

    public getLinesList(): Array<MpkLine> {
        return this.list;
    }
}
