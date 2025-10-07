import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Product from "../Components/Product";
export default function Home(){
    const API_URL="https://fakestoreapi.com/products";
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    async function fetchProductData(){
        setLoading(true);
        try{
            const res=await fetch(API_URL);
            const data=await res.json();
            setPosts(data);
        } 
        catch (error){
            console.log(error);
            setPosts([]);
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchProductData();
    },[])
    return(
        <div className="home-container">
            {
                loading ? <Spinner/> :
                    posts.length>0 ? 
                        (<div className="products-grid">
                            {
                                posts.map((post)=>(
                                    <Product key={post.id} 
                                    post={post}/>   
                                ))
                            }
                        </div>):
                        (<div className="no-data">
                            <p>No Data Found</p>
                        </div>)
            }
        </div>
    );
}