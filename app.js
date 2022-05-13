class Tabs{
    constructor(){
        this.pages = [$('.homePg'),$('.contactPg')];
        this.colors = ['#8ec187ff,rgb(127, 228, 114)','#ee964bff, rgb(216, 129, 52)'];
        $('.tab1').mousedown(e=>this.switchTab(0));
        $('.tab2').mousedown(e=>this.openProjects());
        $('.tab3').mousedown(e=>this.switchTab(1));
    }
    switchTab(tabNumber){
        $('#body').css('background-image', `linear-gradient(to right, ${this.colors[tabNumber]})`);
        for(let i=0; i<2; i++){
            i===tabNumber? this.pages[i].css('display', 'grid'): this.pages[i].css('display', 'none');
        }
    }

    static openProjects(){
        $('.wrapper').css('width', '100%');
        $('.wrapper').css('height', '100%');
        $('#body').removeClass('homeBody');
        $('.wrapper').css('margin-top', '3vmin');
        $('.wrapper').css('margin-left', 'auto');
        $('.header').css('justify-content', 'flex-end');
        $('.tabs').css('margin-right', '5vmin');
        $('.profile').toggle();
    }
}
