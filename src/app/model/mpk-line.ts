export class MpkLine {
    public lineNo: string;
    public type: string;

    constructor (lineNo: string, type: string) {
        this.lineNo = lineNo.toUpperCase();
        this.type = type;
    }
}
