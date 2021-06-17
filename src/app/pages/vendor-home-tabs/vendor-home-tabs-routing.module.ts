import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorHomeTabsPage } from './vendor-home-tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: VendorHomeTabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then((m) => m.HomePageModule),
          },
        ],
      },
      // {
      //   path: 'home',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../sales/sales.module').then((m) => m.SalesPageModule),
      //     },
      //   ],
      // },
    
      {
        path: 'enter-sales',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../enter-sales/enter-sales.module').then((m) => m.EnterSalesPageModule),
          },
        ],
      },

      // {
      //   path: 'profit-loss',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../profit-loss/profit-loss.module').then(
      //           (m) => m.ProfitLossPageModule
      //         ),
      //     },
      //   ],
      // },
      // {
      //   path: 'stock',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../stock/stock.module').then((m) => m.StockPageModule),
      //     },
      //   ],
      // },
      {
        path: 'product-add',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../product-add/product-add.module').then(
                (m) => m.ProductAddPageModule
              ),
          },
        ],
      },
      {
        path: 'products-entry',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../products-entry/products-entry.module').then(
                (m) => m.ProductsEntryPageModule
              ),
          },
        ],
      },
      {
        path: 'inventory-management',
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                '../inventory-management/inventory-management.module'
              ).then((m) => m.InventoryManagementPageModule),
          },
        ],
      },
      {
        path: 'request-stock',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../request-stock/request-stock.module').then(
                (m) => m.RequestStockPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorHomeTabsPageRoutingModule {}
