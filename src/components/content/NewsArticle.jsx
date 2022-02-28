import React from "react";

function NewsArticle({ data }) {
    const divStyle = {
        width: '18rem',
        height: '95%',
        overflow: 'hidden',
        'border-width': '2px',
        margin: '10px',
    }
    const imgStyle = {
        width: '18rem',
        height: '10rem',
    }
    const cardStyle = {
        height: 'auto',
        'text-align': 'justify',
        'font-size': '15px'
    }
    
  return (
   <div className="news">
        <div className="card d-flex" style={divStyle}>
            <img src={data.urlToImage} className="card-img-top" alt="..." style={imgStyle}/>
            <div className="card-body" style={cardStyle}>
                <h6 className="card-title">{data.title}</h6>
                <p className="card-text">{data.description}</p>
                <a href={data.url} className="btn btn-primary">See More</a>
            </div>
        </div>
    </div>
    
  );
}

export default NewsArticle;