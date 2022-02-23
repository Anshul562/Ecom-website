import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import $ from "jquery"
import { useEffect } from "react";

export default function Home({products}) {
  useEffect(()=>{
    
    $('.main-area').scroll( function() {
      if ($('.main-area').scrollTop() >= 88) {
       $('div.main-area-header').addClass('fixed');
      }
      else {
        $('div.main-area-header').removeClass('fixed');
      }
    });
  },[]) 
  return (
    <>
     <link href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap" rel="stylesheet" />
        <div class="app-container">
          <Header />
          <div className="main-area">
            <div class="main-area-header">
              <div class="search-wrapper" id="searchLine">
                <input class="search-input" type="text" placeholder="e.g. files.doc" />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search" viewBox="0 0 24 24">
                  <defs />
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <div className="main-area-header-options">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>

                <div><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute top-5 right-6 h-6 w-6 bg-blue-300 text-center rounded-full">4</span>
                </div>
              </div>
            </div>
            <div className="main-area-main">
              <Banner className="rounded-full"/>
              <ProductFeed products={products}/>
              </div>

          </div>
        </div>
      
    </>
  );
}

export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then((res)=>res.json()
);
  return {props:{
    products,
  }}
}
