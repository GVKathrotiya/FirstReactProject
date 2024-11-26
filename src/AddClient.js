import './App.css';
import { Component, useState } from 'react';
import {Link, Route, Router} from "react-router-dom";
import App from './App';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProductComponent = () => {
    const [category_name, setName] = useState('');
    const navigate = useNavigate();
   
    const saveProduct = (e) => {
        e.preventDefault();
        const product = { category_name };
        alert(product);
        axios.post('/saveCategory', product).then(() => {
            navigate('/saveCategory');
        });
    };

    
        return(
            
            <div>
                    <h3 className="text-center">Add Category</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Category Name: </label>
                                    <input name="category_name" id="category_name" value={category_name} onChange={(e) => setName(e.target.value)}className="form-control" />
                                </div>
                                
                                <button color="primary" type="submit" onClick={saveProduct}>Save</button>
                            </form>
                        </div>
            </div>
        )
    }

export default AddProductComponent;