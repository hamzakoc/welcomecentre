
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";


// Navbar
import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";


// Anasayfa
import Hakkimizda from 'views/examples/Hakkimizda/Hakkimizda';
import Yardim from 'views/examples/Hakkimizda/Yardim';
import Gonullu from 'views/examples/Hakkimizda/Gonullu';
import Katkida from 'views/examples/Hakkimizda/Katkida';
import BizeUlasin from 'views/examples/Hakkimizda/BizeUlasin';

// Belgeler
import Belgeler from "views/examples/Belgeler/Belgeler.js";
import BasvuruSurecleri from "views/examples/Belgeler/BasvuruSurecleri";
import HukukiYardim from 'views/examples/Belgeler/HukukiYardim';
import SosyalYardim from 'views/examples/Belgeler/SosyalYardim';
import Ulasim from 'views/examples/Belgeler/Ulasim';
import TelefonHatti from 'views/examples/Belgeler/TelefonHatti';
import EvInterneti from 'views/examples/Belgeler/EvInterneti';
import KutuphaneKarti from 'views/examples/Belgeler/KutuphaneKarti';
import Ehliyet from 'views/examples/Belgeler/Ehliyet';
import BankaHesaplari from 'views/examples/Belgeler/BankaHesaplari';
import KrediKartlari from 'views/examples/Belgeler/KrediKartlari';
import KiralamaAlimSatim from 'views/examples/Belgeler/KiralamaAlimSatim';
import Sigortalar from 'views/examples/Belgeler/Sigortalar';
import SeyehatBelgeleri from 'views/examples/Belgeler/SeyehatBelgeleri';

// Gıda ve Alisveris

import Gidaalisveris from "views/examples/GidaveAlisveris/Gidaalisveris.js";
import YiyecekBankalari from 'views/examples/GidaveAlisveris/YiyecekBankalari';
import OzelGidalar from 'views/examples/GidaveAlisveris/OzelGidalar';
import Marketler from 'views/examples/GidaveAlisveris/Marketler';
import GiysiMagazalari from 'views/examples/GidaveAlisveris/GiysiMagazalari';
import AlisVeris from 'views/examples/GidaveAlisveris/AlisVeris';
import InternettenAlisveris from 'views/examples/GidaveAlisveris/InternettenAlisveris';


// Sağlık
import Saglik from "views/examples/Saglik/Saglik.js";
import SaglikHizmetleri from 'views/examples/Saglik/SaglikHizmetleri';
import Laboratuvarlar from 'views/examples/Saglik/Laboratuvarlar';
import AileDoktorlari from 'views/examples/Saglik/AileDoktorlari';
import DisHekimleri from 'views/examples/Saglik/DisHekimleri';
import GidaBakimi from 'views/examples/Saglik/GidaBakimi';


// Barınma
import Barinma from "views/examples/Barinma/Barinma.js";
import GeciciBarinma from 'views/examples/Barinma/GeciciBarinma';
import EvKiralama from 'views/examples/Barinma/EvKiralama';
import EvSatinAlma from 'views/examples/Barinma/EvSatinAlma';
import Yurtlar from 'views/examples/Barinma/Yurtlar';

// İstihdam

import Istihdam from "views/examples/Istihdam/Istihdam.js";
import IsBulmaKurumlari from 'views/examples/Istihdam/IsBulmaKurumlari';
import Denklik from 'views/examples/Istihdam/Denklik';
import Sertifikalar from 'views/examples/Istihdam/Sertifikalar';
import Kurslar from 'views/examples/Istihdam/Kurslar';
import Ciraklik from 'views/examples/Istihdam/Ciraklik';

// Eğitim

import Egitim from "views/examples/Egitim/Egitim.js";
import CocuklarIcinOkullar from 'views/examples/Egitim/CocuklarIcinOkullar';
import YetiskinlerIcinOkullar from 'views/examples/Egitim/YetiskinlerIcinOkullar';
import YazveKisOkullari from 'views/examples/Egitim/YazveKisOkullari';


// Kültür ve Sosyal Hayat

import Kultursanat from "views/examples/KulturveSosyalHayat/Kultursanat.js";
import GonulluCalismak from 'views/examples/KulturveSosyalHayat/GonulluCalismak';
import KanadaKulturu from 'views/examples/KulturveSosyalHayat/KanadaKulturu';
import GezilecekYerler from 'views/examples/KulturveSosyalHayat/GezilecekYerler';
import OnemliKutsalMekanlar from 'views/examples/KulturveSosyalHayat/OnemliKutsalMekanlar';
import SporFaaliyetleri from 'views/examples/KulturveSosyalHayat/SporFaaliyetleri';
import SanatFaaliyetleri from 'views/examples/KulturveSosyalHayat/SanatFaaliyetleri';
import MuzikFaaliyetleri from 'views/examples/KulturveSosyalHayat/MuzikFaaliyetleri';

// Özel Bakım

import Ozelbakim from "views/examples/OzelBakim/Ozelbakim.js";
import DevletHizmetleri from 'views/examples/OzelBakim/DevletHizmetleri';
import OzelKuruluslar from 'views/examples/OzelBakim/OzelKuruluslar';
import Topluluklar from 'views/examples/OzelBakim/Topluluklar';
import Imkanlar from 'views/examples/OzelBakim/Imkanlar';
import Organizasyonlar from 'views/examples/OzelBakim/Organizasyonlar';


// Admin


import Admin from 'components/adminpanel/Admin'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* Navbar */}
      <Route path="/admin" render={props => <Admin {...props} />} />
      <Route path="/index" render={props => <Index {...props} />} />
      <Route  path="/belgeler" render={props => <Belgeler {...props} />} />
      <Route  path="/saglik" render={props => <Saglik {...props} />} />
      <Route  path="/barinma" render={props => <Barinma {...props} />} />
      <Route  path="/istihdam" render={props => <Istihdam {...props} />} />
      <Route  path="/egitim" render={props => <Egitim {...props} />} />
      <Route  path="/kultursanat" render={props => <Kultursanat {...props} />} />
      <Route  path="/gidaalisveris" render={props => <Gidaalisveris {...props} />} />
      <Route  path="/ozelbakim"  render={props => <Ozelbakim {...props} />} />

    {/* Hakkimizda */}
      <Route path="/hakkimizda" render={props => <Hakkimizda {...props} />} />
      <Route  path="/yardim" render={props => <Yardim {...props} />} />
      <Route  path="/gonullu" render={props => <Gonullu {...props} />} />
      <Route  path="/katkida" render={props => <Katkida {...props} />} />
      <Route  path="/bizeulasin" render={props => <BizeUlasin {...props} />} />


         {/* Belgeler */}
        <Route path="/basvurusurecleri" render={props => <BasvuruSurecleri {...props} />} />
        <Route  path="/hukukiyardim" render={props => <HukukiYardim {...props} />} />
        <Route  path="/sosyalyardim" render={props => <SosyalYardim {...props} />} />
        <Route  path="/ulasim" render={props => <Ulasim {...props} />} />
        <Route  path="/telefonhatti" render={props => <TelefonHatti {...props} />} />
        <Route  path="/evinterneti" render={props => <EvInterneti {...props} />} />
        <Route  path="/kutuphanekarti" render={props => <KutuphaneKarti {...props} />} />
        <Route  path="/ehliyet" render={props => <Ehliyet {...props} />} />
        <Route  path="/bankahesaplari"  render={props => <BankaHesaplari {...props} />} />
        <Route  path="/kredikartlari" render={props => <KrediKartlari {...props} />} />
        <Route  path="/kiralamaalimsatim"  render={props => <KiralamaAlimSatim {...props} />} />
        <Route  path="/sigortalar" render={props => <Sigortalar {...props} />} />
        <Route  path="/seyehatbelgeleri"  render={props => <SeyehatBelgeleri {...props} />} />

      
         {/* Belgeler */}
        <Route path="/basvurusurecleri" render={props => <BasvuruSurecleri {...props} />} />
        <Route  path="/hukukiyardim" render={props => <HukukiYardim {...props} />} />
        <Route  path="/sosyalyardim" render={props => <SosyalYardim {...props} />} />
        <Route  path="/ulasim" render={props => <Ulasim {...props} />} />
        <Route  path="/telefonhatti" render={props => <TelefonHatti {...props} />} />
        <Route  path="/evinterneti" render={props => <EvInterneti {...props} />} />
        <Route  path="/kutuphanekarti" render={props => <KutuphaneKarti {...props} />} />
         
         
         {/* Gida ve Alisveris */}
        <Route path="/yiyecekbanklari" render={props => <YiyecekBankalari {...props} />} />
        <Route  path="/ozelgidalar" render={props => <OzelGidalar {...props} />} />
        <Route  path="/marketler" render={props => <Marketler {...props} />} />
        <Route  path="/giysimagazalari" render={props => <GiysiMagazalari {...props} />} />
        <Route  path="/alisveris" render={props => <AlisVeris {...props} />} />
        <Route  path="/internettenalisveris" render={props => <InternettenAlisveris {...props} />} />
         
         {/* Saglik */}
         <Route path="/saglikhizmetleri" render={props => <SaglikHizmetleri {...props} />} />
        <Route  path="/laboratuvarlar" render={props => <Laboratuvarlar {...props} />} />
        <Route  path="/ailedoktorlari" render={props => <AileDoktorlari {...props} />} />
        <Route  path="/dishekimleri" render={props => <DisHekimleri {...props} />} />
        <Route  path="/gidabakimi" render={props => <GidaBakimi {...props} />} />

       {/* Barinma */}
         <Route path="/gecicibarinma" render={props => <GeciciBarinma {...props} />} />
        <Route  path="/evkiralama" render={props => <EvKiralama {...props} />} />
        <Route  path="/evsatinalma" render={props => <EvSatinAlma {...props} />} />
        <Route  path="/yurtlar" render={props => <Yurtlar {...props} />} />
        

        {/* Istihdam */}
         <Route path="/isbulmakurumlari" render={props => <IsBulmaKurumlari {...props} />} />
        <Route  path="/denklik" render={props => <Denklik {...props} />} />
        <Route  path="/sertifikalar" render={props => <Sertifikalar {...props} />} />
        <Route  path="/kurslar" render={props => <Kurslar {...props} />} />
        <Route  path="/ciraklik" render={props => <Ciraklik {...props} />} />

       {/* Egitim */}
       <Route path="/cocuklaricinokullar" render={props => <CocuklarIcinOkullar {...props} />} />
        <Route  path="/yetiskinlericinokullar" render={props => <YetiskinlerIcinOkullar {...props} />} />
        <Route  path="/yazvekisokullari" render={props => <YazveKisOkullari {...props} />} />
       

         {/* Kultur sanat */}
         <Route path="/gonullucalismak" render={props => <GonulluCalismak {...props} />} />
        <Route  path="/kanadakulturu" render={props => <KanadaKulturu {...props} />} />
        <Route  path="/gezilecekyerler" render={props => <GezilecekYerler {...props} />} />
        <Route  path="/onemlikutsalmekanlar" render={props => <OnemliKutsalMekanlar {...props} />} />
        <Route  path="/sporfaaliyetleri" render={props => <SporFaaliyetleri {...props} />} />
        <Route  path="/sanatfaaliyetleri" render={props => <SanatFaaliyetleri {...props} />} />
        <Route  path="/muzikfaaliyetleri" render={props => <MuzikFaaliyetleri {...props} />} />


       {/* Saglik */}
       <Route path="/devlethizmetleri" render={props => <DevletHizmetleri {...props} />} />
        <Route  path="/ozelkuruluslar" render={props => <OzelKuruluslar {...props} />} />
        <Route  path="/topluluklar" render={props => <Topluluklar {...props} />} />
        <Route  path="/imkanlar" render={props => <Imkanlar {...props} />} />
        <Route  path="/organizasyonlar" render={props => <Organizasyonlar {...props} />} />



        <Redirect to="/index" />

    </Switch>  
    </BrowserRouter>,
  document.getElementById("root")
);
