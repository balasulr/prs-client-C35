import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// imports for the Home, About & e404 components:
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
// imports for user components:
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
// imports for vendor components:
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
// imports for product components:
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
// imports for request components:
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
// imports for requestline components:
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';

const routes: Routes = [
  // routes for the home, about, and e404 components
  { path: "", redirectTo: "/home", pathMatch:"full"},
  { path: "home", component: HomeComponent},
  { path: "about", component: AboutComponent},

  // routes for User components
  { path: "user/list", component: UserListComponent},
  { path: "user/detail/:id", component: UserDetailComponent},
  { path: "user/create", component: UserCreateComponent},
  { path: "user/edit/:id", component: UserEditComponent},

  // routes for Vendor components
  { path: "vendor/list", component: VendorListComponent},
  { path: "vendor/detail/:id", component: VendorDetailComponent},
  { path: "vendor/create", component: VendorCreateComponent},
  { path: "vendor/edit/:id", component: VendorEditComponent},

  // routes for Product components
  { path: "product/list", component: ProductListComponent},
  { path: "product/detail/:id", component: ProductDetailComponent},
  { path: "product/create", component: ProductCreateComponent},
  { path: "product/edit/:id", component: ProductEditComponent},

  // routes for Request components
  { path: "request/list", component: RequestListComponent},
  { path: "request/detail/:id", component: RequestDetailComponent},
  { path: "request/create", component: RequestCreateComponent},
  { path: "request/edit/:id", component: RequestEditComponent},

  // routes for Requestline components
  { path: "requestline/create/:reqid", component: RequestlineCreateComponent}, // reqid comes from requestline-create.component.ts
  { path: "requestline/edit/:id", component: RequestlineEditComponent},

  { path: "**", component: E404Component} // Always the last component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
