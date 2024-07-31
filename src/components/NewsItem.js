import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>

                    <img src={!imageUrl ? "https://th.bing.com/th/id/R.2f6dfc1fd131899f0ce422024a27514a?rik=0RcAVfsebNUrEA&riu=http%3a%2f%2fwww.lendacademy.com%2fwp-content%2fuploads%2f2015%2f05%2fMarketplace-Lending-News.jpg&ehk=B51LHpo%2fTnJlxcVxNEQxmRoIPlj2tu38mmtIq9WkxYs%3d&risl=&pid=ImgRaw&r=0" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem