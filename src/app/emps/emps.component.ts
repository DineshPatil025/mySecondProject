import { Component } from "@angular/core";
import { Iemp } from "../models/emp";

@Component({
    selector: "emps-root",
    templateUrl: "./emps.component.html",
    styleUrls: ["./emps.component.scss"]
})
export class EmpsComponent {

    empDetails: Array<Iemp> = [
        {
            empName: "employee1",
            empId: "abc-1",
            empEmail: "employee@1",
            empContact: 11111
        },
        {
            empName: "employee2",
            empId: "abc-2",
            empEmail: "employee@2",
            empContact: 11112
        },
        {
            empName: "employee3",
            empId: "abc-3",
            empEmail: "employee@3",
            empContact: 11113
        },
        {
            empName: "employee4",
            empId: "abc-4",
            empEmail: "employee@4",
            empContact: 11114
        },
        {
            empName: "employee5",
            empId: "abc-5",
            empEmail: "employee@5",
            empContact: 11115
        }

    ]
    searcTextValue : string = "";
    onSearchKeyUp(eve: Event ) {
        let searchValue = (eve.target as HTMLInputElement).value;
        console.log(searchValue);
        this.searcTextValue = searchValue;
        
    }

}