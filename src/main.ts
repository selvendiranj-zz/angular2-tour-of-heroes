// import { bootstrap } from '@angular/platform-browser'; // importing bootstrap function
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// bootstrap(AppModule);
platformBrowserDynamic().bootstrapModule(AppModule);

