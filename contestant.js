class Contestant {
    constructor() {
       this.name = null;
       this.answer = 0;
       this.index = null;
    }

    getCount(){
        var ContestantCountRef = database.ref('contestantCount');
        ContestantCountRef.on("value",(data)=>{
          contestantCount = data.val();
        })
      }

    updateCount(count) {
        database.ref('/').update({
            contestantCount: count
        })
    }


    static getInfo(){
        var contestantInfoRef = database.ref("contestants")
        contestantInfoRef.on("value", (data)=>{
            allContestants = data.val();
        })
    }

    update(){
        var contestantNumber = "contestants/contestant" + contestantCount
        database.ref(contestantNumber).set({
            name:this.name,
            answer:this.answer
        })
    }
}


