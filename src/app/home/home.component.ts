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
        'Chybovat je lidské, ale něco pořádně podělat,<br>to vyžaduje rootovské heslo.',
        'Pokud napoprvé neuspějete,<br>nazvěte to „verze 1.0“',
        'Programátoři jsou nástroje,<br>které zpracovávají kofein na kód.',
        'Proč chceme inteligentní terminály,<br>když máme takovou spoustu pitomých uživatelů?',
        'Život by byl mnohem snazší,<br>kdybychom k němu měli zdrojové kódy.',
        'Můj program nemá chyby.<br>Jen si vyvíjí náhodné funkce.',
        'Buď v klidu, jsou to jen jedničky a nuly!',
        'Pokud jste problém nevyřešili silou,<br>pak jste nevyvinuli dostatečnou sílu.',
        'Nejsem asociál,<br>jsem jen uživatelsky nepřívětivý.',
        'Pokud nechcete být nahrazen počítačem,<br>nechovejte se jako počítač.',
        'Lepší být geek než být idiot!',
        'Internet: místo, kde muži jsou muži, ženy jsou taky muži<br>a děti jsou ve skutečnosti agenti FBI.',
        'Pokud je debugování proces odstraňování chyb,<br>pak programování musí být vytváření chyb.',
        'Dnes může počítač používat každý blbec.<br>Mnozí to opravdu dělají.',
        'Hardware je ta část počítačového systému,<br>kterou lze nakopnout.',
        'Návrh programovacích jazyků je jako procházka parkem.<br>Konkrétně Jurským parkem.',
        'Unix je uživatelsky přátelský.<br>Jen si své přátele velmi pečlivě vybírá.',
        'Jak mám vědět, jestli to bude fungovat?<br>Od toho jsou betatesteři, já to jen píšu!',
        'Tisíce řádků kvalitního objektového kódu...',
        'Většina dobrých programátorů neprogramuje proto,<br>že chtějí spoustu peněz a slávu, ale protože je to zábava.',
        'Mě nezajímá, že to na vašem počítači funguje. My neprodáváme váš počítač!',
        'Pozor na chyby v tom kódu.<br>Já jsem pouze dokázal, že funguje, nezkoušel jsem ho.',
        'Teoreticky je teorie a praxe totéž. V praxi tomu tak není.',
        'Dobrý návrh: hodnota roste rychleji než náklady.',
        'Chodit po vodě a psát software podle specifikace je snazší, pokud je obojí zmražené.',
        'Programování je dnes závod mezi softwarovými vývojáři,<br>co se snaží vytvořit větší a lepší blbuvzdorné programy,<br>a vesmírem, který se snaží vytvořit větší a lepší blby. Zatím Vesmír vítězí.',
        'Ti, co nechápou Linux, jsou odsouzeni k tomu, aby jej vynalezli znovu.',
    ];

    constructor() {
        this.citat = this.citaty[Math.floor(Math.random() * this.citaty.length)];
    }

    ngOnInit(): void {
        window.onblur = function () {
            document.title = 'Nezapomněli jste na mě? | Jakub Šarm';
        };
        window.onfocus = function () {
            document.title = 'Jakub Šarm - Programátor';
        };
        
        $(window).scroll(() => {
            var winHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            
            var elemHeight = $("#main").height();
            var elementTop = $("#main").position().top; 
             
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
