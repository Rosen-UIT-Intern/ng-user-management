import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#dropdown').click(function (event) {
      event.stopPropagation();

      if (!$('#dropdown').hasClass('open')) {
        $('#dropdown').addClass('open');
      } else {
        $('#dropdown').removeClass('open');
      }
    });

    $('#dropdown-menu').click(function (event) {
      event.stopPropagation();
    });

    $(window).click(function () {
      if ($('#dropdown').hasClass('open')) {
        $('#dropdown').removeClass('open');
      }
    });
  }

}
