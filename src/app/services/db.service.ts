/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  /*
  private storage: SQLiteObject;
  productList = new BehaviorSubject([]);
  public isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false); //private ? */

  constructor(
   private platform: Platform,
   private sqlite: SQLite,
   private httpClient: HttpClient,
   private sqlPorter: SQLitePorter
  ) {
    /*
    this.platform.ready().then(() => {
      this.sqlite.create({
        // eslint-disable-next-line @typescript-eslint/quotes
        name: "dbteste",
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        this.storage = db;
        this.getFakeData();
      })
      .catch((err) => {
        console.log(err);
      });
    }); */
  }

  /*
  async getFakeData() {
    await this.httpClient.get(
      'assets/sql1.sql',
      {responseType: 'text'}
    ).subscribe(async data => {
     await this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.getProducts();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchProducts(): Observable<Product[]> {
    return this.productList.asObservable();
  }

  getProducts(){
    return this.storage.executeSql('SELECT * FROM Products', []).then(res => {
      const items: Product[] = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            productName: res.rows.item(i).product_name,
            productQuantity: res.rows.item(i).product_quantity
           });
        }
      }
      this.productList.next(items);
    });
  }

  addProduct(productName, productQuantity) {
    const data = [productName, productQuantity];
    return this.storage.executeSql('INSERT INTO Products (product_name, product_quantity) VALUES (?, ?)', data)
    .then(res => {
      //trazer produtos ou criar função separada no componente para ai sim chamar todos os produtos
      //e notificar criar função toaste
      this.getProducts();
    });
  }

  getProduct(id): Promise<Product> {
    return this.storage.executeSql('SELECT * FROM Products WHERE id = ?', [id]).then(res => ({
        id: res.rows.item(0).id,
        productName: res.rows.item(0).product_name,
        productQuantity: res.rows.item(0).product_quantity
      }));
  }

  updateProduct(id, updateProduct: Product) {
    const data = [updateProduct.productName, updateProduct.productQuantity];
    return this.storage.executeSql(`UPDATE Products SET product_name = ?, product_quantity = ? WHERE id = ${id}`, data)
    .then(res => {
      //trazer produtos ou criar função separada no componente para ai sim chamar todos os produtos
      //e notificar criar função toaste
      this.getProducts();
    });
  }

  deleteProduct(idProduct) {
    return this.storage.executeSql('DELETE FROM Products WHERE id = ?', [idProduct])
    .then(_ => {
      //trazer produtos ou criar função separada no componente para ai sim chamar todos os produtos
      //e notificar criar função toaste
      this.getProducts();
    });
  }
  */
}
