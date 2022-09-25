import React from "react";

function AboutInfo(props) {
  return (
    <div className="about">
      <div className="about__txt">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
      <div className="about__img">
        <img src={props.img} alt={props.title} />
      </div>
    </div>
  );
}

const aboutText = [
  {
    title: "유튜브 API",
    desc: "유튜브에서 제공하는 API를 이용해서 작업했습니다.",
    img: "https://images.unsplash.com/photo-1663183538127-82173c57b25e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  },
  {
    title: "TMDB API",
    desc: "TMDB에서 제공하는 API를 이용해서 작업했습니다.",
    img: "https://images.unsplash.com/photo-1663431263825-b78496c2a7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Unsplash API",
    desc: "Unsplash에서 제공하는 API를 이용해서 작업했습니다.",
    img: "https://images.unsplash.com/photo-1663431905837-09cf339461ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1907&q=80",
  },
];

function AboutCont() {
  return (
    <section className="about__cont">
      <div className="container">
        <div className="about__inner">
          {aboutText.map((txt) => (
            <AboutInfo
              title={txt.title}
              desc={txt.desc}
              img={txt.img}
              key={txt.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutCont;
