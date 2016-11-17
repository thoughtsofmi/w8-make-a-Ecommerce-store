import React from 'react'
import { Link } from 'react-router'

class Footer extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="container-fluid footer-container">
              <div className="row">
                <div className="col-sm-6">
            <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
            <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
            <i className="fa fa-pinterest-square fa-2x" aria-hidden="true"></i>
            <i className="fa fa-youtube-square fa-2x" aria-hidden="true"></i>
                </div>
                <div className="col-sm-2">
              <h4>About</h4>
              <a href="/"><h6>About</h6></a>
                </div>
                <div className="col-sm-2">
              <h4>Contact</h4>
              <a href="/"><h6>Contact</h6></a>
                </div>
                <div className="col-sm-2">
              <h4>Legal</h4>
                <a href="/"><h6>Shipping & Returns</h6></a>
                </div>
              </div>
            </div>
        )
    }
}

export default Footer