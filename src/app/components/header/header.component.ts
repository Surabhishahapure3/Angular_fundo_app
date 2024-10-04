import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SEARCH_ICON, MENU_ICON,  SETTING_ICON, REFRESH_ICON,LIST_VIEW_ICON } from 'src/assets/svg-icons';
import { DataService } from 'src/services/data-service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleDrawer = new EventEmitter<void>();
  searchQuery:string = ""
  showProfile: boolean = false;
  userName: string = '';
  userEmail: string = '';
  // console.log(userName,userEmail);
  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dataService: DataService, private router: Router) {
    iconRegistry.addSvgIconLiteral('main-menu', sanitizer.bypassSecurityTrustHtml(MENU_ICON));
    iconRegistry.addSvgIconLiteral('search-icon', sanitizer.bypassSecurityTrustHtml(SEARCH_ICON));
    iconRegistry.addSvgIconLiteral('refresh-icon', sanitizer.bypassSecurityTrustHtml(REFRESH_ICON));
    iconRegistry.addSvgIconLiteral('setting-icon', sanitizer.bypassSecurityTrustHtml(SETTING_ICON));
    iconRegistry.addSvgIconLiteral('list-view-icon', sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON));
  }

  ngOnInit():void{

    this.loadUserData();
  }

  loadUserData() {
    this.userName = localStorage.getItem('name') || '';  // Ensure correct key 'name'
    this.userEmail = localStorage.getItem('email') || '';  // Ensure correct key 'email'
    // console.log('User Name:', this.userName);
    // console.log('User Email:', this.userEmail);
  }


  logout(){
    localStorage.clear();
    this.router.navigate(['/'])
  }
  handleSearchQuery(){
    this.dataService.updateSearchQuery(this.searchQuery)
  }

  onMenuIconClick(){
    this.toggleDrawer.emit();
  }


}
