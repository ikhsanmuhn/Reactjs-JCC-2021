import React from "react"

const FooterLayout = () =>{
  return (
    <>
      <footer>
      <div className="content">
        <div className="left box">
          <div className="upper">
            <div className="topic">About us</div>
            <p>PleazurePlaze is a movies and games platform that people can use for their Pleazure in home and chill playing games and watch movies. 
              PleazurePlaze is a project in Jabar Coding Camp - ReactJS in 2021</p>
          </div>
        </div>
        <div className="middle box">
          <div className="topic">Our Services</div>
          <div>Movies, All year</div>
          <div>Games, New Release</div>
        </div>
        <div className="right box">
            <div className="topic">Contact us</div>
            <div className="phone">
              <span>+628 9089 6767</span>
            </div>
            <div className="email">
              <span>pleazureplaze@gmail.com</span>
            </div>
          </div>
      </div>
      <div className="bottom">
        <p>Copyright © 2021 <a href="#">PleazurePlaze & Ikhsan Muhamad Nurdin</a> All rights reserved</p>
      </div>
    </footer>
    </>
  )
}

export default FooterLayout