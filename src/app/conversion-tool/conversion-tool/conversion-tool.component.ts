import { Component, OnInit } from '@angular/core';
import { RequestTesService } from '../services/request-tes.service';

@Component({
  selector: 'app-conversion-tool',
  templateUrl: './conversion-tool.component.html',
  styleUrls: ['./conversion-tool.component.scss']
})
export class ConversionToolComponent implements OnInit {

  constructor(private test: RequestTesService){

  }

  ngOnInit(): void {
    this.test.testRequest().subscribe(data => {
      console.log("testin data")
      console.log(data)
    })
  }

}
