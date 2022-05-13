class Tabs{
    constructor(){
        this.pages = [$('.homePg'),$('.projectsPg'),$('.contactPg')];
        this.colors = ['#8ec187ff','#f4d35eff','#ee964bff'];
        $('.tab1').mousedown(e=>this.switchTab(0));
        $('.tab2').mousedown(e=>this.switchTab(1));
        $('.tab3').mousedown(e=>this.switchTab(2));
    }
    switchTab(tabNumber){
        $('#body').css('backgroundColor', this.colors[tabNumber]);
        for(let i=0; i<3; i++){
            i===tabNumber? this.pages[i].css('display', 'grid'): this.pages[i].css('display', 'none');
        }
    }
}

new Tabs();