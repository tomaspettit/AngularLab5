import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './Services/student.service';
import { WeatherService } from './Services/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  students:any=[];
  weather:any=[];
  b:any="";
  v:any="";
  clouds:any="";
  dt:any="";
  temp:any = "";
  coordinate:any="";
  windy:any="";
  system:any="";
  time:any="";
  id:any="";
  name:any="";
  cod:any="";

  constructor(private studentService: StudentService, private weatherService: WeatherService){}

  ngOnInit(): void {
    this.studentService.GetStudentData().subscribe(
      (data)=>{
        this.students = data.students;
      }
    );
    this.weatherService.GetWeatherData().subscribe(
      (data)=>{
        this.temp = data.main;
        this.b = data.base;
        this.v = data.visibility;
        this.coordinate=data.coord;
        this.windy=data.wind;
        this.clouds=data.clouds;
        this.dt=data.dt;
        this.weather = data.weather;
        this.system= data.sys;
        this.time=data.timezone;
        this.id=data.id;
        this.name=data.name;
        this.cod=data.cod;
      }
    );
  }
}
