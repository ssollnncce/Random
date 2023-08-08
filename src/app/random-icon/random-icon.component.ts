import { Component } from '@angular/core';
import { faHeart, faStar, faBell, faBed, faCoffee, faGamepad, faMagic, faNewspaper, faVirus, faCake, faXRay, faZap, faLandmark, faKey, faJar, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-random-icon',
  templateUrl: './random-icon.component.html',
  styleUrls: ['./random-icon.component.css']
})
export class RandomIconComponent {
  icons: IconDefinition[] = [faHeart, faStar, faBell, faBed, faCoffee, faGamepad, faMagic, faNewspaper, faVirus, faCake, faXRay, faZap, faLandmark, faKey, faJar];

  randomIcon: IconDefinition | null = null;

  showRandomIcon() {
    this.randomIcon = this.icons[Math.floor(Math.random() * this.icons.length)];
    setTimeout(() => {
      this.randomIcon = null;
    }, 3000);
  }
}
