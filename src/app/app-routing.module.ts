import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FilmsComponent } from './films/films.component';
import { StoriesComponent } from './stories/stories.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
  {
    path: 'about' , component: AboutComponent
  },
  {
    path: 'team' , component: TeamComponent
  },
  {
    path: 'portfolio' , component: PortfolioComponent
  },
  {
    path: 'films' , component: FilmsComponent
  },
  {
    path: 'stories' , component: StoriesComponent
  },
  {
    path: 'contact' , component: ContactComponent
  },
  {
    path: 'faq' , component: FaqComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
