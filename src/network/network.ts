import react from "react";
import { useState, useEffect } from "react"
import { worldNewsModule } from "../assets/module";
import { EachCountryNewsData } from "../assets/module";

export function WorldNewsFunction() {
  const [worldNewsResult, setWorldNewsResult] = useState<worldNewsModule>()
  var requestOptions: any = {
    method: 'GET',
    redirect: 'follow'
  };
  useEffect(() => {
    fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=drOGzKhrS4itQI8JAlMOI21w58Ic8cAM", requestOptions)
      .then(response => response.json())
      .then(result => setWorldNewsResult(result))
      .catch(error => console.log('error', error));
  }, [])

  return worldNewsResult
}


export function EachCountryNewsFunction(countryname: string) {

  const [eachCountryNews, setEachCountryNews] = useState<EachCountryNewsData | null>(null);

  useEffect(() => {
    let eachCountryName = countryname.toLowerCase();
    var requestOptions: any = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=\"${eachCountryName}\"&api-key=drOGzKhrS4itQI8JAlMOI21w58Ic8cAM`, requestOptions)
      .then(response => response.json())
      .then(result => setEachCountryNews(result))
      .catch(error => console.log('error', error));
  }, []);


  return eachCountryNews
}