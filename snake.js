class Snake{
    constructor(){
        this.len=1;
        this.body=[];
        this.body[0]=createVector(0,0);
        this.xdir=0;
        this.ydir=0;

    }
    setDir(x,y){
        this.xdir=x;
        this.ydir=y;

    }

    update(){
        let head=this.body[this.body.length-1].copy();
        this.body.shift();
        head.x+=this.xdir;
        head.y+=this.ydir;
        this.body.push(head);
      // this.body[0].x+=this.xdir;
       //this.body[0].y+=this.ydir;

    }

    show(){
        for(let i=0;i<this.body.length;i++){
            fill(255);
            noStroke();
            rect(this.body[i].x,this.body[i].y,1,1);
        }
                


    }
    eat(pos){
        if(this.body[this.body.length-1].x===pos.x&&this.body[this.body.length-1].y===pos.y){
            this.grow();
            return true;
            
        }
    }
    grow(){
        this.len++;
        let head=this.body[this.body.length-1].copy();
        this.body.push(head);
        
    }
    endGame(){
        
        let x=this.body[this.body.length-1].x;
        let y=this.body[this.body.length-1].y;
        if(x>w-1||x<0||y>h-1||y<0){
            return true;
        }
        for(let i=0;i<this.body.length-2;i++){
            let part=this.body[i];
            if(part.x==x&&part.y==y){
                return true;
            }

        }
        return false;
    }
}