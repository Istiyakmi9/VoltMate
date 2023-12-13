import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @HostListener('window:scroll', [])
  onScroll() {
    let elm = document.getElementById("arrow-btn") as HTMLInputElement;
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      elm.classList.remove('d-none');
    }
    else {
      elm.classList.add('d-none');

    }
  }

  activeMenu(e: any) {
    let elm = e.currentTarget;
    let element = document.querySelectorAll(".nav-link");
    element.forEach(x => {
      if (x.classList.contains("active"))
        x.classList.remove("active");
    });
    elm.classList.add("active");
  }

}
