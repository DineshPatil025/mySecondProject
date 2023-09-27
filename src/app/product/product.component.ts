import { Component, OnInit } from "@angular/core";


@Component({
    selector: "product-root",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.scss"]
})


export class ProductComponent implements OnInit {
    products: Array<string> = ["product1", "product2", "product3", "product4", "product5"]
    items: Array<string> = ["ietm1", "ietm2", "ietm3", "ietm4", "ietm5",]
    skills = ["html", "css", "js", "ts", "bootstrap"]
    groceries = ["grocery1", "grocery2", "grocery3", "grocery4", "grocery5",]
    isBtnDisable: boolean = false;
    showList : boolean = true;

    constructor() {

    }

    ngOnInit(): void {
        setTimeout(() => {
        }, 5000)
    }
    onBtnAct():void{
                
        console.log("btn clicked")

        this.isBtnDisable = ! this.isBtnDisable;

    }

    onTOggle(): void {
        console.log("btn clicked")
        this.showList = ! this.showList
    }
}