import React from "react";
import { PostHeader } from "../PostHeader/PostHeader";
import "./Post.css";
import { PostContent } from "../PostContent/PostContent";
import { PostControllers } from "../PostControllers/PostControllers";


export default function Post() {
    return (
        <div className="post">
            <PostHeader imageSrc="https://lh3.googleusercontent.com/ogw/ADea4I4lekz41FcTZGAr_Jq3x2rAzRRjn-JpiiJbZPhMnQ=s83-c-mo" 
                        displayName="Marharyta Kulinich"
                        userName="@margokulinich"
                        />
            <PostContent text="I try to learn React.js" img="https://miro.medium.com/max/2048/1*h5UGPzaL1E4dIy_JWDrsAw.png"/>
            
            <PostControllers />
        </div>
    )
}