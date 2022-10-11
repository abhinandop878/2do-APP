import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-twodo-list',
  templateUrl: './twodo-list.component.html',
  styleUrls: ['./twodo-list.component.css']
})
export class TwodoListComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewTodo().subscribe(
      (data)=>{
        this.todoData=data
      }
    )
  }
  todoData:any=[]

  ngOnInit(): void {
  }

}
