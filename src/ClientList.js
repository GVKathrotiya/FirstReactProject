import './App.css';
import App from './App';
import { Component } from 'react';
import {Link, Route, Router} from "react-router-dom";

class ClientList extends Component
{
    state = {
        categories:[]
      };
      async componentDidMount(){
        const response = await fetch('/categories');
        const body = await response.json();
        this.setState({categories:body});
      }

      
      render(){
        const {categories} = this.state;
        return(
          
          <div className="App-intro">
             <Link to={"/addCategory"} className="nav-link">Add Category</Link>
                  <h2>Category List</h2>
                    <div>
                      <table>
                        <tr border="2">
                          <th>Category Name</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                        {categories.map(client =>
                          <tr>
                            <td>{client.category_name} </td>
                            <td><Link to={`/EditClient/${client.category_id}`} className="nav-link">Edit</Link></td>
                            <td><Link to={`/DeleteClient/${client.category_id}`} className="nav-link">Delete</Link></td>
                           </tr>
                        )}
                      </table>
                    </div>              
                </div>
        );
      } 
    
}
export default ClientList;