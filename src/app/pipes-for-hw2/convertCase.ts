export class ConvertCase {
    public isTitle = false;
    public isUpper = false;
    public isLower = false;
    constructor(type:string){
    if(type==='upper') {
        this.isUpper = true;
    }

    if(type==='lower'){
    this.isLower=true;
    }

    if(type==='title'){
    this.isTitle=true;
    }
    }

}
