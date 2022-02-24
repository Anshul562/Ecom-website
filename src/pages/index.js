import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import $ from "jquery"
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

export default function Home({products}) {
const router=useRouter()
const items = useSelector(selectItems)

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
        
          <div className="main-area">
            <div className="main-area-header">
              <div className="search-wrapper" id="searchLine">
                <input className="search-input" type="text" placeholder="e.g. files.doc" />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-search" viewBox="0 0 24 24">
                  <defs />
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <div className="main-area-header-options">
               
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>

                <div onClick={()=>router.push('/checkout')}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute top-5 right-6 h-6 w-6 bg-blue-300 text-center rounded-full">{items.length}</span>
                </div>
              </div>
            </div>
            <div className="main-area-main">
              <Banner className="rounded-full"/>
              <ProductFeed products={products}/>
              </div>

          </div>
      
      
    </>
  );
}

export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then(res=>res.json().catch()
);
  return {props:{
    products,
  }}
}
