import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

function BelowCrousel()
{
    return(
        <>
        <section className="why-we ">
        <div className="container-mt2 shadow-lg p-3 mb-5 bg-body rounded">
          <div className="cont-mt2-left">
            <h3 className="head-text">სამი მიზეზი ჩვენს ასარჩევად</h3>
              <div className="mt2-row">
                <div className="mt2-left-icon">
                <i className="fas fa-users icons "/>
                </div>
                <div className="mt2-left-text">
                  <h4 className="head-text1">პროფესიონალი ტრენერები</h4>
                  <p className="text22">პროფესიონალიზმი, პასუხისმგებლობა და შედეგებზე ორიენტირებული სწავლება არის ჩვენი პრიორიტეტი.</p>
                </div>
              </div>
              <div className="mt2-row">
                <div className="mt2-left-icon">
                <i className="fas fa-certificate icons">
                </i>
                </div>
                <div className="mt2-left-text p-0">
                  <h4 className="head-text1">სერტიფიკატი</h4>
                  <p className="text22">სერთიფიკატი აღიარებულია დამსაქმებლებს შორის და წარმოადგენს საკმარის პირობას საზღვაგარეთ მასწავლებლის ადგილის მისაღებად.</p>
                </div>
              </div>
              <div className="mt2-row p-0">
                <div className="mt2-left-icon"><i className="fas fa-chart-bar icons"></i></div>
                <div className="mt2-left-text">
                  <h4 className="head-text1">სამი ლექცია უფასოდ</h4>
                  <p className="text22">შეთავაზებით სარგებლობა შეუძლია ყველა მომხმარებელს, რომლებიც დარეგისტრირებული არიან ჩვენს სისტემაში.</p>
                </div>
              </div>          
          </div>
          <div className="container-mt2-rg  shadow-lg p-2 bg-body rounded  p-2 ">
            <form action="#" className="form-fill">
              <div className="form1">
                <label htmlFor="name">
                </label>
                <input className="form-block" type="text" id="name" name="name/surname" placeholder="Name/Surname..." required />
              </div>
              <div className="form1">
                <label htmlFor="mail"></label>
                <input className="form-block" type="email" id="mail" name="e-mail" placeholder="E-mail..." required />
              </div>
              <div className="form1">
                <label htmlFor="pwd"></label>
                <input className="form-block" type="password" id="pwd" name="pwd" minLength="8" placeholder="Password..." required />
                <br /> <br /> 
              </div>
              <button className=" color-change1 but-send" type="submit">Send 
              <i className="far fa-paper-plane"></i></button>
            </form>			
          </div>
        </div>      
      </section>
     
     
        </>
    )
}
export default BelowCrousel;


