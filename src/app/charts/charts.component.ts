import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as d3 from 'd3';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @ViewChild('chart')
  private chartContainer: ElementRef;

  // dataset = [
  //   {x: 10,    y: 10},
  //   {x: 10,    y: 20},
  //   {x: 10,    y: 30}
  // ];

  margin = {top: 20, right: 20, bottom: 30, left: 40};

  constructor() { }

  ngOnInit(): void {
    // if (!this.data) { return; }

    this.createChart();
  }

  // private createChart(): void {
  //   const dataset = [63, 38, 92, 282, 23];
  //   const svgWidth = 500, svgHeight = 300, barPadding = 5;
  //   let barWidth = (svgWidth / dataset.length);

  //   // d3.select('svg').remove();
  //   d3.select('h3').text('fuq u');

  //   // const element = this.chartContainer.nativeElement;
  //   // const data = this.dataset;


  //   var svg = d3.select('svg').append('svg')
  //     .attr('width', svgWidth)
  //     .attr('height', svgHeight);

  //   var barChart = svg.selectAll('rect')
  //     .data(dataset)
  //     .enter()
  //     .append('rect')
  //     .attr('y', function(d) {
  //       return svgHeight - d;
  //     })
  //     .attr('height', function(d) {
  //       return d;
  //     })
  //     .attr('width', svgWidth)
  //     .attr('transform', function(d, i){
  //       var translate = [barWidth = i, 0];
  //       return 'translate('+ translate +')';
  //     });

  //   // const contentWidth = element.offsetWidth = this.margin.left - this.margin.right;
  //   // const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;

  //   // const x = d3.

  private createChart(): void {

    const numbers = [1, 30, 90];
    const barHeight = 40;

    d3.select('svg')
      .selectAll('rect')
      .data(numbers)
      .enter()
      .append('rect')
      .attr('width', d => d)
      .attr('height', barHeight)
      .attr(
        'transform', (d, i) => 'translate(100,' + i * barHeight + ')');

    d3.selectAll('.d3Fun:nth-child(even)')
      .style('color', 'red')
      .text('u a beech');

  }

}
