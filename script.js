

const url = "https://holidays.abstractapi.com/v1/?api_key=638d63d7c44a4dae93db5435dd12b9ec&country=CA&year=2023&month=12&day=25"
const url2 ="https://v6.exchangerate-api.com/v6/d4a12f12f9e2704ab44d4407/pair/CAD/EUR"


function buildUrl(){


  fetch(url)
  .then(function (response){ 
  
  if(response.ok){
    response.json() 
    .then(function (data){
      
      // 
      
      // console.log(data[0].name);
      

      const title=data[0].name;      
      const year=data[0].date_year;
      const month=data[0].date_month;
      const date=data[0].date_day;
      let displayCalender=title+ " And Its On  "+ year+"  " +month+"  "+date;
      // console.log(name,year,month,date);
      document.querySelector(".holi123").innerText = "The Holiday Name Is  " + displayCalender;
     
      
      
      
      // let displayCalender=
      // data[0].name +"And Its On  "+ data[0].date_year + data[0].date_month +data[0].date_day  ;
      // document.querySelector(".holi123").innerText = "The Holiday Name Is  " + displayCalender;
      // // let holidayData=JSON.stringify(data);
      // console.log(holidayData);
      // let holidayName=data.name;
      // console.log(holidayName);
      
    })
  } 
 
  } ).then(function() {
    fetch(url2)

    .then(function (response){ 
    if(response.ok){
      response.json() 
      .then(function (clip){
        console.log(clip);
        let conversionRate=clip.base_code+"  "+clip.target_code+"  "+  clip.conversion_rate;
           
       
        document.querySelector(".exchange-rates").innerText = "exchange rate between CAD & EUR is " + conversionRate;
        
      })
    } 
    } )
  
  })
  }
document.querySelector(".buttons123").addEventListener("click",buildUrl);


  




// document
//   .querySelector(".search-bar")
//   .addEventListener("keyup", function (event) {
//     if (event.key == "Enter") {
//       weather.search();
//     }
//   });


// change the param on the link! , put in my api key , check doc,check js 22 (adjust url learn ) variable/check js and list options ,

// const endpoint= "https://holidays.abstractapi.com/v1/?" ;

// d4a12f12f9e2704ab44d4407


// const api_key="638d63d7c44a4dae93db5435dd12b9ec";

// const country="CA";

// const year="2023"

// const month="01";

// build url -- event --param"/new veriable 