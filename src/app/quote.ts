export class Quote {
    showDescription:boolean
    constructor(
        public id:number, 
        public quote:string, 
        public author:string, 
        public uploadedBy:string,
        public tag:string,
        public entryDate:Date,
        public upVote:number, 
        public downVote:number,
    )
        {
        this.showDescription=false;
    }
}
