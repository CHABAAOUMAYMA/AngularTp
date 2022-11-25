import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  rue: string | null = '';
  codePostal: string | null = '';
  ville: string | null = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ville = this.route.snapshot.queryParams['ville'];
    this.rue = this.route.snapshot.queryParams['rue'];
    this.codePostal = this.route.snapshot.queryParams['codepostal'];
  }



}
