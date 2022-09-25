import React from "react";

function ReferItem(){

}

function RefCont({ refers }) {
  return (
    <section className="refer__cont">
      <div className="container">
        <div className="refer_inner">
          <h2>CSS</h2>
          <div className="refer__list">
            {refers.map(refer=>(
              <ReferItem
                key={refer.id}
                
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RefCont;
