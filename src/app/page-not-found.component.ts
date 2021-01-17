import {Component} from "@angular/core";

@Component({
  template: `
    <div class="back-div" [style.background-image]="image">
      <div class="center-div">
        <h2>404. Страница не найдена</h2>
      </div>
    </div>
  `,
  styles: [
    `.back-div {
      width: -webkit-fill-available;
      min-height: 85vh;
      background-repeat: repeat;
    }
    .center-div {
      text-align: center;
      display: flex;
      min-height: 90vh;
      justify-content: center;
      align-items: center;
    }
    `
  ]
})
export class PageNotFoundComponent {
  image = `url(assets/not-found.jpg)`;
}
