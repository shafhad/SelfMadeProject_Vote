class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Vote');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
     
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Bengal Assembly polls 2021");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        voterCount=voterCount+1;

        this.tmc=createButton("Mamata Banerjee");
        this.tmc.position(displayWidth/4, displayHeight/4);

        this.bjp=createButton("Sourav Ganguly");
        this.bjp.position(displayWidth/3, displayHeight/3);

        this.aimim=createButton("asaddudin owaisi");
        this.aimim.position(displayWidth/2, displayHeight/2);

        this.left=createButton("rahul gandhi");
        this.left.position(displayWidth/1.5, displayHeight/1.5);

        this.tmc.mousePressed(()=>{
            this.bjp.hide();
            this.aimim.hide();
            this.left.hide();
            mamataCount+=1;
            text("maa mati manush", displayWidth/2, displayHeight/2);
        })

        this.bjp.mousePressed(()=>{
            this.tmc.hide();
            this.aimim.hide();
            this.left.hide();
            gangulyCount+=1;
            text("sonar bangla", displayWidth/2, displayHeight/2);
        })

        this.left.mousePressed(()=>{
            this.bjp.hide();
            this.aimim.hide();
            this.tmc.hide();
            gandhiCount+=1;
            text("whyyyyyyyyyyyyyy", displayWidth/2, displayHeight/2);
        })

        this.aimim.mousePressed(()=>{
            this.bjp.hide();
            this.tmc.hide();
            this.left.hide();
            owaisiCount+=1;
            text("congratulations, you just voted for bjp", displayWidth/2, displayHeight/2);
        })
   })
}
}