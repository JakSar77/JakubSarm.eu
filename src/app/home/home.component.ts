import { Component, HostListener, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public citat: any = 'Komerce se vkrádá už i do reklamy...';

    public citaty: any = [
        'Komerce se vkrádá už i do reklamy...',
        'Pokud napoprvé neuspějete, nazvěte to „verze 1.0“',
        'Programátoři jsou nástroje, které zpracovávají kofein na kód.',
        'Život by byl mnohem snazší, kdybychom k němu měli zdrojové kódy.',
        'Pokud jste problém nevyřešili silou, pak jste nevyvinuli dostatečnou sílu.',
        'Pokud nechcete být nahrazen počítačem, nechovejte se jako počítač.',
        'Hardware je ta část počítačového systému, kterou lze nakopnout.',
        'Návrh programovacích jazyků je jako procházka parkem. Konkrétně Jurským parkem.',
        'Jak mám vědět, jestli to bude fungovat? Od toho jsou betatesteři, já to jen píšu!',
        'Tisíce řádků kvalitního objektového kódu...',
        'Většina dobrých programátorů neprogramuje proto,<br>že chtějí spoustu peněz a slávu, ale protože je to zábava.',
        'Pozor na chyby v tom kódu.<br>Já jsem pouze dokázal, že funguje, nezkoušel jsem ho.',
        'Teoreticky je teorie a praxe totéž. V praxi tomu tak není.',
        'Dobrý návrh: hodnota roste rychleji než náklady.',
    ];

    public img_loaded: boolean  = false;

    constructor() {
        this.citat = this.citaty[Math.floor(Math.random() * this.citaty.length)];
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.img_loaded     = true;
            clearTimeout();
        }, 1000);
        window.onblur   = function () {
            document.title  = 'Nezapomněli jste na mě? | Jakub Šarm';
        };
        window.onfocus  = function () {
            document.title  = 'Jakub Šarm - Programátor';
        };
        
        $(window).scroll(() => {
            var winHeight       = $(window).height();
            var scrollTop       = $(window).scrollTop();
            
            var elemHeight      = $("#main").height();
            var elementTop      = $("#main").position().top; 
             
            if (elementTop < scrollTop + winHeight && scrollTop < elementTop + elemHeight)
                $("nav-link").addclass("active");
            else
                $("nav-link").removeClass("active");
            
        });

    }

    public mobileMenuState: boolean    = false;
    mobileMenu(){
        const navbar    = document.getElementById('mobile-nav');
        const body      = document.body;
        if(this.mobileMenuState){
            this.mobileMenuState    = false;
            body!.classList.toggle('mobile-nav-active')
            navbar!.classList.toggle('fa-list')
            navbar!.classList.toggle('fa-times')
        }else{
            this.mobileMenuState    = true;
            body!.classList.toggle('mobile-nav-active')
            navbar!.classList.toggle('fa-list')
            navbar!.classList.toggle('fa-times')
        }
    }


    public mLink: any = "main";
    menu(link:any){
        this.mLink   = link;
        link.scrollIntoView();
    }

    getYPosition(e: Event): number {
        return (e.target as Element).scrollTop;
    }

    @HostListener('window:scroll', ['$event']) 
    scrollHandler(event:any) {
    }

}
