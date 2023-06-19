import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description, imgUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
            <div className="card" >
            <div style=
                    {{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}> 
              <span className = "badge rounded-pill bg-danger" style = {{left: '90%', zIndex: '1'}}>{source}</span>
              </div>
              <img src ={!imgUrl?"data:image/png;base64,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":imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className = "card-text"><small className = "text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                <a href= {newsUrl} target = "_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More...</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItems

// 750ba9ee26334e06932f8026332a2b3d