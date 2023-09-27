import { Component } from "@angular/core";
import { Istudents } from "../models/students";


@Component({
    selector: "students-root",
    templateUrl: "./students.component.html",
    styleUrls: ["./students.component.scss"]
})
export class StudentsComponent {

    stdDetails : Array<Istudents> = [
        {
            stdName : "student1",
            stdClass : "1",
            stdSchool : "vves"
        },
        {
            stdName : "student2",
            stdClass : "2",
            stdSchool : "vves2"
        },
        {
            stdName : "student3",
            stdClass : "3",
            stdSchool : "vves3"
        },
        {
            stdName : "student4",
            stdClass : "4",
            stdSchool : "vves4"
        },
        {
            stdName : "student5",
            stdClass : "5",
            stdSchool : "vves5"
        },
    ]

}