import { NgModule } from '@angular/core';

// lib angular
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// my component
import { HomeComponent } from './components/home/home.component';
import { DocsComponent } from './components/docs/docs.component';
import { FeaturesComponent } from './components/features/features.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { EventsComponent } from './components/events/events.component';
import { BlogComponent } from './components/blog/blog.component';
import { ExampleComponent } from './components/example/example.component';
import { Example1Component } from './components/example/example1/example1.component';
import { Example2Component } from './components/example/example2/example2.component';
const routers: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'event', component: EventsComponent },
  { path: 'blog', component: BlogComponent },
  {
    path: 'example', component: ExampleComponent,
    children: [
        { path: 'example1', component: Example1Component },
        { path: 'example2', component: Example2Component }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    HomeComponent,
    DocsComponent,
    FeaturesComponent,
    ResourcesComponent,
    EventsComponent,
    BlogComponent,
    ExampleComponent,
    Example1Component,
    Example2Component
  ],
  imports: [
    RouterModule.forRoot(routers),
    CommonModule,
    HttpModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
