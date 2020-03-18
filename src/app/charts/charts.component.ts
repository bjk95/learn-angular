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

  margin = {top: 20, right: 20, bottom: 30, left: 40};

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

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

    // d3.select('body')
    //     .append('svg')
    //       .attr('width', 400)
    //       .attr('height', 400)
    //       .style('background', 'blue')
    //     .append('rect')
    //       .attr('width', 300)
    //       .attr('height', 300)
    //       .attr('x', 50)
    //       .attr('y', 50)
    //       .style('fill', 'green');

    const myData = [10, 240, 350, 340, 203];

    const height = 500;
    const width = 500;
    const barWidth = 35;
    const barOffset = 5;

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(myData)])
      .range([0, 500]);

    const xScale = d3.scaleOrdinal()
        .domain([<any >d3.range(0, myData.length)])
        .range([0, width]);

    d3.select('#chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', '#f4f4f4')
        .selectAll('rect')
          .data(myData)
          .enter()
            .append('rect')
            .style('fill', 'blue')
            .attr('width', barWidth)
            .attr('height', (d) => d)
            .attr('x', (d, i) => i * (barWidth + barOffset))
            .attr('y', (d) => height - d);

  }

}
