class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1 = createInput("code1")
        this.access1.position(100,90)
        this.access1.style('backgorund','white')

        this.button1 = createButton('Check')
        this.button1.position(300,90)
        this.button1.style('backgorund','pink')

        this.access2 = createInput("code2")
        this.access2.position(100,190)
        this.access2.style('backgorund','white')

        this.button2 = createButton('Check')
        this.button2.position(300,190)
        this.button2.style('backgorund','blue')

        this.access3 = createInput("code3")
        this.access3.position(100,290)
        this.access3.style('backgorund','white')

        this.button3 = createButton('Check')
        this.button3.position(300,290)
        this.button3.style('backgorund','yellow')

        this.access4 = createInput("code4")
        this.access4.position(100,390)
        this.access4.style('backgorund','white')

        this.button4 = createButton('Check')
        this.button4.position(300,390)
        this.button4.style('backgorund','pink')

        this.access5 = createInput("code5")
        this.access5.position(100,490)
        this.access5.style('backgorund','white')

        this.button5 = createButton('Check')
        this.button5.position(300,490)
        this.button5.style('backgorund','pink')
    }

    display(){

        // Add code to make the buttons function as expected

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value()))
            this.button1.hide();
            this.access1.hide();
            score++;
        })

        
        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value()))
            this.button2.hide();
            this.access2.hide();
            score++;
        })

        
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value()))
            this.button3.hide();
            this.access3.hide();
            score++;
        })

        
        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value()))
            this.button4.hide();
            this.access4.hide();
            score++;
        })

        
        this.button5.mousePressed(() => {
            if(system.authenticate(accessCode5,this.access5.value()))
            this.button5.hide();
            this.access5.hide();
            score++;
        })

    }
}