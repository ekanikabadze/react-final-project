import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Gundlibtn from "../Components/Gundlibtn";

function GundliCard(Props)
{  console.log(Props);
    return(
        <>
        <section>        
            <div className="gund-sec2-article shadow-lg p-3 mb-5 bg-body rounded">
                <h3 className="head-text">ჩვენი გუნდი</h3>
                <p className="ord-text">ცენ­ტ­რის ინ­ტე­რე­სი, ზო­გა­დად, მა­ღალ­კ­ვა­ლი­ფი­ცი­ურ ტრე­ნე­რებ­თან თა­ნამ­შ­რომ­ლო­ბაა, თუმ­ცა, არა მხო­ლოდ ჩვენს ცენტრს, ზო­გა­დად სფე­როს სჭირ­დე­ბა მა­ღალ­კ­ვა­ლი­ფი­ცი­უ­რი ტრე­ნე­რე­ბი, ამი­ტო­მაც დღის წეს­რიგ­ში დად­გა „ტრე­ნერ­თა სკო­ლის“ ჩა­მო­ყა­ლი­ბე­ბის თე­მა. მი­უ­ხე­და­ვად იმი­სა, რომ ცენ­ტ­რი ნამ­დ­ვი­ლად არ არის ორი­ენ­ტი­რე­ბუ­ლი იმა­ზე, რომ  მხო­ლოდ თა­ვად იყოს ქვე­ყა­ნა­ში მსურ­ველ­თათ­ვის ტრე­ნინ­გის შემ­თა­ვა­ზე­ბე­ლი, ჩვე­ნი რო­ლი ამა­შიც გა­მო­იკ­ვე­თა — სხვა ტრე­ნინგ-პრო­ვა­ი­დე­რებს და­ვეხ­მა­როთ მომ­ზა­დე­ბუ­ლი ტრე­ნე­რე­ბის შე­თა­ვა­ზე­ბით, ჩვენ მი­ერ მომ­ზა­დე­ბუ­ლი ადა­მი­ა­ნუ­რი რე­სურ­სი მათ­თ­ვი­საც ხელ­მი­საწ­ვ­დო­მი გავ­ხა­დოთ</p>
                <div className="kursebi-subject-blok">
                {/*  */}
                    <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={Props.img1} alt="" />
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{Props.name1}</h5>
                            <p className="kursebi-subject">{Props.skilll}</p>
                        </div>
                        <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                            <i className="fas fa-microscope"></i>
                        </div>
                        <p className="more1"><a className="more" href="#"></a></p>
                    </div>
                    {/*  */}
                    <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={Props.img2} alt="" />
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{Props.name2}</h5>
                            <p className="kursebi-subject">{Props.skilll}</p>
                        </div>
                        <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                            <i className="fas fa-vial"></i>
                        </div>
                        <p className="more1"><a className="more" href="#"></a></p>
                    </div>
                    <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={Props.img3} alt="" />
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{Props.name3}</h5>
                            <p className="kursebi-subject">{Props.skilll}</p>
                        </div>
                        <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                            <i className="fas fa-satellite"></i>
                        </div>
                        <p className="more1"><a className="more" href="#"></a></p>
                    </div>
                    <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={Props.img4} alt="" />
                        </div>
                        <div class="kurs-pers-tex">
                            <h5 class="subject-name">{Props.name4}</h5>
                            <p class="kursebi-subject">{Props.skill2}</p>
                        </div>
                        <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                            <i className="fas fa-landmark"></i>
                        </div>
                        <p className="more1"><a className="more" href="#"></a></p>
                    </div>
                </div>
                <div className="kursebi-subject-blok">
                    <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={Props.img5} alt="" />
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{Props.name5}</h5>
                            <p className="kursebi-subject">{Props.skill3}</p>
                        </div>
                        <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                            <i className="fas fa-laptop-house"></i>
                        </div>
                        <p className="more1"><a className="more" href="#"></a></p>
                    </div>
                    <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={Props.img6} alt="" />
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{Props.name6}</h5>
                            <p className="kursebi-subject">{Props.skill4}</p>
                        </div>
                        <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                            <i className="fas fa-share-alt"></i>
                        </div>
                        <p className="more1"><a className="more" href="#"></a></p>
                    </div>
                    <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={Props.img4} alt="" />
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{Props.name7}</h5>
                            <p className="kursebi-subject">{Props.skill5}</p>
                        </div>
                        <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                            <i className="fas fa-handshake"></i>
                        </div>
                        <p className="more1"><a className="more" href="#"></a></p>
                    </div>
                    <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={Props.img3} alt="" />
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{Props.name8}</h5>
                            <p className="kursebi-subject">{Props.skill3}</p>
                        </div>
                        <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                            <i className="fas fa-laptop-house"></i>
                        </div>
                        <p className="more1"><a className="more" href="#"></a></p>
                    </div>
                </div>
               <Gundlibtn/>
            </div>        
        </section> 

        </>
    )
}
export default GundliCard;