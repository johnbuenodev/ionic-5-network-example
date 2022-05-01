import { Component, OnDestroy, OnInit } from '@angular/core';

//imports
import { FormGroup, FormBuilder } from '@angular/forms';
//import { DbService } from './../services/db.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Network } from '@awesome-cordova-plugins/network/ngx';
import { BehaviorSubject, Subscriber, Subscription, Unsubscribable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, OnDestroy/* implements OnInit */ {

  /*
  mainForm: FormGroup;
  dataList: any[] = []; */
  onChangeSubscription: Subscription;
  connectSubscriptionOn: Subscription;
  connectSubscriptionOff: Subscription;
  isOnline = '';

  public isOnlineOnChangeService: BehaviorSubject<boolean> = new BehaviorSubject(null); //null porque inicializou

  constructor(
    //private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router,
    public network: Network,
    public toastInstance: ToastController
  ) {
    this.onChangeSubscription = this.network.onChange().subscribe((res) => {

      if (res === 'connected') {
        //setTimeout(() => {
          this.messageCustom('Internet OnChange: Conectado', 'success');
        //}, 500);
        this.isOnlineOnChangeService.next(true);
      }

      if (res === 'disconnected') {
        //setTimeout(() => {
          this.messageCustom('Internet OnChange: Desconectado', 'danger');
        //}, 500);
        this.isOnlineOnChangeService.next(false);
      }

    });

    this.network.onDisconnect().subscribe(() => {
      if (this.network.type === 'none') {
        this.messageCustom('Conexão Disconnect','danger');
        this.isOnlineOnChangeService.next(false);
      }
    });

    this.network.onConnect().subscribe(() => {
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          this.messageCustom('Conexão On Wifi', 'success');
          this.isOnlineOnChangeService.next(true);
        }
        if (this.network.type === '2g') {
          this.messageCustom('Conexão On 2G', 'success');
          this.isOnlineOnChangeService.next(true);
        }
        if (this.network.type === '3g') {
          this.messageCustom('Conexão On 3G', 'success');
          this.isOnlineOnChangeService.next(true);
        }
        if (this.network.type === '4g') {
          this.messageCustom('Conexão On 4G', 'success');
          this.isOnlineOnChangeService.next(true);
        }
        if (this.network.type === 'cellular') {
          this.messageCustom('Conexão On cell', 'success');
          this.isOnlineOnChangeService.next(true);
        }
      }, 300);
    });
    this.verifyInternet();
  }

  async ngOnInit() {
    await this.netWorkStateOnChange().subscribe(res => {
      if (res === true) {
        this.isOnline = 'ONLINE';
      }
      if(res === false) {
        this.isOnline = 'OFFLINE';
      }
    });
  }

  netWorkStateOnChange() {
    return this.isOnlineOnChangeService.asObservable();
  }

  ngOnDestroy() {
    this.onChangeSubscription.unsubscribe();
  }

  async messageCustom(messageVar: string, colorVar: string, durationVar?: number) {

    const toastInstanceObj = this.toastInstance.create({
      message: messageVar,
      duration: durationVar ? durationVar : 1800,
      position: 'top',
      color: colorVar,
    });
    (await toastInstanceObj).present();
  }

  async messageBoolean(messageBoolean: boolean, colorVar: string) {

    const toastInstanceObj2 = this.toastInstance.create({
      message: String(messageBoolean),
      duration: 1800,
      position: 'top',
      color: colorVar,
    });
    (await toastInstanceObj2).present();
  }

  verifyInternet() {
    if (this.network.type === 'wifi') {
      this.messageCustom('Wifi connection', 'success');
      this.isOnlineOnChangeService.next(true);
    }

    if (this.network.type === '2g') {
      this.messageCustom('conexão 2G', 'success');
      this.isOnlineOnChangeService.next(true);
    }
    if (this.network.type === '3g') {
      this.messageCustom('conexão 3G', 'success');
      this.isOnlineOnChangeService.next(true);
    }
    if (this.network.type === '4g') {
      this.messageCustom('conexão 4G', 'success');
      this.isOnlineOnChangeService.next(true);
    }
    if (this.network.type === 'cellular') {
      this.messageCustom('conexão cell', 'success');
      this.isOnlineOnChangeService.next(true);
    }

    if (this.network.type === 'none') {
      this.messageCustom('Conexão None(sem)', 'danger');
      this.isOnlineOnChangeService.next(false);
    }
  }
}


/*

------ ADD plataformas

Android
ionic cordova platform add android

iOS
ionic cordova platform add ios

Windows
ionic cordova platform add windows

------- Gerando Build/Executavel para Cordova

Android
ionic cordova build android

iOS
ionic cordova build ios

Windows
ionic cordova build windows

------- Gerando Build/Executavel com Capacitor

ionic capacitor sync

ionic capacitor run android

ionic cap sync

ionic cap run android


// OUTROS COMANDOS

npm run build

npx cap sync

npx cap run android

*/
