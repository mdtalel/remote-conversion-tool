import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { FlexmonsterPivot } from 'ngx-flexmonster';

@Component({
  selector: 'app-conversion-report-tool',
  templateUrl: './conversion-report-tool.component.html',
  styleUrls: ['./conversion-report-tool.component.scss']
})
export class ConversionReportToolComponent implements OnInit, AfterViewInit {
  @Input() licencekey:string = "";

  @ViewChild("pivot") pivot: FlexmonsterPivot | null = null;

  /**
   * Reprot Config
   */
  @Input() config: string = "";
  @Input() configurableFields:boolean =  false;
  reportConfig: Flexmonster.Report | string = "";


  


  /**
   * Report displayed field values
   */
  @Input() captionsKeys: any;

  @Output() reportFiltered = new EventEmitter();
  @Output() reportFieldStatus = new EventEmitter<boolean>();
  @Output() reportChanged = new EventEmitter<any>;


  reportData: any;

  /**
   * Reprot data
   */
  @Input() set data(value:any) {
    if (value) {
      this.reportData = value;

      this.updataReportData();
    }
  }


  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.buildReport();
    }, 100)


  }

  buildReport() {
    const config = JSON.parse(this.config);
    this.reportConfig = {
      dataSource: {
        data: this.reportData
      },
      options: {
        showAggregationLabels:false
      },
      slice: config?.slice ?? config,
      formats:config?.formats ?? [{
        name: "",
        divideByZeroValue: " "
      }],
      conditions: config?.conditions,
     
      
    }

    /* events*/

    this.optionsOpended();
    this.optionsClosed();

  }

  updataReportData() {
    if (!this.pivot) return;
    this.pivot?.flexmonster?.updateData({ data: this.reportData })
  }


  onReportChanged() {
    const report = <any>this.pivot?.flexmonster.getReport({
      withGlobals: true,
      withDefaults: true
    });
    const config = {
      slice: report.slice,
    
      formats: report?.formats,
      conditions: report?.conditions
    }

    this.reportChanged.emit(config)

  }

  optionsOpended() {
    this.pivot?.flexmonster.on('fieldslistopen', () => {
      this.reportFieldStatus.emit(false);
    })
  }

  optionsClosed() {
    this.pivot?.flexmonster.on('fieldslistclose', () => {
      this.reportFieldStatus.emit(true);
    })
  }

  setToolbarTabs(toolbar: Flexmonster.Toolbar) {
 

    let tabsList = toolbar.getTabs();
 
    if(!this.configurableFields) delete tabsList[tabsList.length - 2];
    toolbar.getTabs = () => {
      delete tabsList[0];
      delete tabsList[1];
      delete tabsList[2];
      if(!this.configurableFields)  delete tabsList[11];
      delete tabsList[tabsList.length - 1];
      return tabsList;
    }
  }
}
