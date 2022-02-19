import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public citat: any   = "Komerce se vkrádá už i do reklamy...";

    public citaty:any   = [
        "Komerce se vkrádá už i do reklamy...",
        "Chybovat je lidské, ale něco pořádně podělat, to vyžaduje rootovské heslo.",
        "Pokud napoprvé neuspějete, nazvěte to „verze 1.0“",
        "Programátoři jsou nástroje, které zpracovávají kofein na kód.",
        "Proč chceme inteligentní terminály, když máme takovou spoustu pitomých uživatelů?",
        "Život by byl mnohem snazší, kdybychom k němu měli zdrojové kódy.",
        "Můj program nemá chyby. Jen si vyvíjí náhodné funkce.",
        "Buď v klidu, jsou to jen jedničky a nuly!",
        "Pokud jste problém nevyřešili silou, pak jste nevyvinuli dostatečnou sílu.",
        "Nejsem asociál, jsem jen uživatelsky nepřívětivý.",
        "Pokud nechcete být nahrazen počítačem, nechovejte se jako počítač.",
        "Lepší být geek než být idiot!",
        "Internet: místo, kde muži jsou muži, ženy jsou taky muži a děti jsou ve skutečnosti agenti FBI.",
        "Pokud je debugování proces odstraňování chyb, pak programování musí být vytváření chyb.",
        "Dnes může počítač používat každý blbec. Mnozí to opravdu dělají.",
        "Hardware je ta část počítačového systému, kterou lze nakopnout.",
        "Návrh programovacích jazyků je jako procházka parkem. Konkrétně Jurským parkem.",
        "Unix je uživatelsky přátelský. Jen si své přátele velmi pečlivě vybírá.",
        "Jak mám vědět, jestli to bude fungovat? Od toho jsou betatesteři, já to jen píšu!",
    ];

    constructor() {
        this.citat  = this.citaty[Math.floor(Math.random() * this.citaty.length)];
    }

    ngOnInit(): void {
    }


}
