import { Routes } from '@angular/router';

import { Home } from './sections/home/home';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Experiences } from './sections/experience/experience';
import { Contact } from './sections/contact/contact';

export const routes: Routes = [
    {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'skills',
    component: Skills
  },
  {
    path: 'projects',
    component: Projects
  },
  {
  path: 'experience',
  component: Experiences
},
  {
    path: 'contact',
    component: Contact
  },
  {
    path: '**',
    redirectTo: ''
  }
];
