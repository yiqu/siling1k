import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/service/about.service';
import { AboutItem } from 'src/app/shared/models/data.model';

@Component({
  selector: 'about-new',
  templateUrl: 'about-new.component.html',
  styleUrls: ['./about-new.component.css']
})

export class AboutCreationComponent implements OnInit {

  currentEntryName: string = "";
  currentEntryId: string = "";
  currentEntryDescription: string = "";

  constructor(public as: AboutService) {

  }

  ngOnInit() { }

  onEntrySubmit() {
    let newEntry = new AboutItem(this.currentEntryId, this.currentEntryDescription, this.currentEntryName);
    this.as.addNewEntry(newEntry);
  }
}