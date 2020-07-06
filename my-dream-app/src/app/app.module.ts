import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { OverviewComponent } from './overview/overview.component';
import { EdudetComponent } from './edudet/edudet.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaldetailsComponent,
    OverviewComponent,
    EdudetComponent,
    SkillComponent,
    ProjectsComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
