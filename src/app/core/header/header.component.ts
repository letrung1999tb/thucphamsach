import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $("#navbarDropdown").click();

      $('ul.nav2 li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
      }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
      });

      var toggleAffix = function (affixElement, scrollElement, wrapper) {

        var height = affixElement.outerHeight(),
          top = wrapper.offset().top;

        if (scrollElement.scrollTop() >= top) {
          wrapper.height(height);
          affixElement.addClass("affix");
        }
        else {
          affixElement.removeClass("affix");
          wrapper.height('auto');
        }

      };

      $('[data-toggle="affix"]').each(function () {
        var ele = $(this),
          wrapper = $('<div></div>');

        ele.before(wrapper);
        $(window).on('scroll resize', function () {
          toggleAffix(ele, $(this), wrapper);
        });

        // init
        toggleAffix(ele, $(window), wrapper);
      });

      window.onscroll = function () { scrollFunction() };

      function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          document.getElementById("logo").style.width = "140px";
        } else {
          document.getElementById("logo").style.width = "155px";
        }
      }
    });
  }


}
