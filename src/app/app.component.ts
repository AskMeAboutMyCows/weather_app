import { Component } from '@angular/core';


/// the ingectable below may need to be moved

@Injectable({ providedIn: "root" })
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherForCity(city: string): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
    return this.http.get(path);
  }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  cities = ["London", "Paris", "Moscow", "New York", "Karachi", "Sydney"];

  cityControl: FormControl;

  constructor(private router: Router) {}

  ngOnInit() {
    this.cityControl = new FormControl("");
    this.cityControl.valueChanges
      .subscribe(value => {
        this.router.navigate([value]);
      });
  }

  ngOnDestroy() {
  }
}