import React from "react";
import '../index.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Coursesimg from "../Components/Coursesimg";
import CourseCard from "../Components/CourseCard";
import { coursescard } from "../Alldata";

function Main2()
{
    return(
        <>
        <Header/>
        <Coursesimg/>
        {coursescard.map((val,key)=>{
           return(
               <CourseCard
                   title={val.title}
                   img1={val.img1}
                   img2={val.img2}
                   img3={val.img3}
                   img4={val.img4}
                   name1={val.name1}
                   pro1={val.pro1}
               />
           )
        })}
        
        <Footer/>


        </>
    )
}
export default Main2;