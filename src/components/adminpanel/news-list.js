import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ExamplesNavbar from "../Navbars/ExamplesNavbar.js"
import DemoFooter from "../Footers/DemoFooter.js"
const base_url = 'https://wlcmcntr.herokuapp.com/';
// const base_url = 'http://localhost:5000/';
const News = props => (
  <tr>
    <td>{props.news.username}</td>
    <td>{props.news.title}</td>
    <td>{props.news.description}</td>
    <td>{props.news.date.substring(0,10)}</td>
    <td>
      <Link to={"/admin/edit/"+props.news._id}>edit</Link> | <a href="#" onClick={() => { props.deleteNews(props.news._id) }}>delete</a>
    </td>
  </tr>
)

export default class NewsList extends Component {
  constructor(props) { 
    super(props);

    this.deleteNews = this.deleteNews.bind(this)

    this.state = {news: []};
  }

  componentDidMount() {
    axios.get(base_url + 'admin/news')
      .then(response => {
        this.setState({ news: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteNews(id) {
    axios.delete(base_url + 'admin/news/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      news: this.state.news.filter(el => el._id !== id)
    })
  }

  newsList() {
    return this.state.news.map(currentnews => {
      return <News news={currentnews} deleteNews={this.deleteNews} key={currentnews._id}/>;
    })
  }

  render() {
    return (
     
      <div>
         <ExamplesNavbar/>
        <h3 style={{ textAlign:"center" }}>News List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Title</th>
              <th>Description</th>
              
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.newsList() }
          </tbody>
        </table>
        <DemoFooter/>
      </div>
    )
  }
}