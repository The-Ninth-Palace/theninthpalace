import React, { useEffect, useState } from "react";
// import axios from "axios";
import Spinner from "./utils/spinner";

const MediumBlog = () => {
    var moment = require("moment");
    const [mediumData, setMediumData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@theninthpalace`)
        .then(res => res.json())
        .then(response => {
          setMediumData(response.items);
          setIsLoading(false);
        })
        .catch(err => console.log(err));
    }, []);
  
    const finalData = mediumData.slice(0, 2);
  
    return (
      <div >
        {/* <p>Fetching data from Medium!</p> */}
        {isLoading && <Spinner />}
  
        
          {finalData.map(article => (
            
              <div key={article.guid}>
                <div class="item">
                    <img width="100%" src={article.thumbnail}  alt="The Ninth Palace P2E Icon " title="The Ninth Palace Play to Earn " />
                </div>
                <br />
                <h3 class="fn_title"><a href={article.link}>{article.title}</a></h3>
                <p class="fn_desc">
                    Published:{" "}
                    {moment(article.pubDate).format("dddd, MMMM Do YYYY")}
                </p>
              </div>
          ))}
        
      </div>
    );
  };
  export default MediumBlog;

// export default function MediumConnection(){
 
//     const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@theninthpalace";
//     const [profile, setProfile] = useState({
//     name: 'The One',
//     profileImage: '',
//     profileUrl: ''
//     });
//     const [blog, setBlog] = useState ({
//     item: [],
//     isLoading: true,
//     error: null
//     });

// const axios = require('axios').default;

// useEffect(() => {
//     axios.get(mediumURL)
//     .then(info => {
//         const image = info.data.feed.image;
//         const link = info.data.feed.link;
//         const blogs = info.data.items;
//         const posts = blogs.filter(post => post.categories.length > 0)

//         // multiple post
//         // setProfile(p => ({...p, profileUrl: link, profileImage: image}))

//         // single post
//         setProfile(p => ({p, profileUrl: link, profileImage: image}))

//         setBlog({item: posts, isLoading: false})
//     })
//     .catch(err => setBlog({error: err.message}))
//     }, [axios]);

//     return (
//         <MediumBlog blog={blog} profile={profile}/>
        
//     )
// }

// import React, { Component } from "react";
// import Axios from "axios";
// // import c from "./SingleBlog.module.css";
// import Spinner from "./spinner";

// export class SingleBlog extends Component {
 
//   constructor(props) {
//     super(props);
//     this.state = {
//       singlePost: {},
//       //titleid: props.location.pathname,
//       avatar: "",
//       profileLink: "",
//       error:null,
//       isloading:true
//     };
//   }
//   mediumURL =
//     "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@theninthpalace";
//   componentDidMount() {
//      await Axios.get(this.mediumURL)

//       .then(async (data) => {
   
//         const avatar = data.data.feed.image;
//         const profileLink = data.data.feed.link;
//         const res = data.data.items; 
//         const posts = res.filter((item) => item.categories.length > 0);
//         for (let i in posts) {
//           const title = "/" + posts[i].title;
//           if (title === this.state.titleid) {
//             let post = posts[i];
            
//               this.setState((p) => ({
//                 singlePost: post,
//                 avatar: avatar,
//                 profileLink: profileLink,
//                 isloading:false
//               }));
            
//           }
//         }
        
//       })
//       .catch((e) => {
//         this.setState({error:e.toJSON()})
//         console.log(e);
//       });
//   }

//   render() {
//     let post
//     if(this.state.singlePost){
//      post =( <>
//        <h2>{this.state.singlePost.title}</h2>
//         <div >
//           <a
//             href={this.state.profileLink}
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             <img src={this.state.avatar} alt="profile" width="75" height="75" />
//           </a>

//           <a
//             href={this.state.profileLink}
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             <p>{this.state.singlePost.author}</p>
//           </a>
//           <p>{this.state.singlePost.pubDate}</p>
//         </div>
  
//       <div dangerouslySetInnerHTML={{ __html:this.state.singlePost.content}}>
//           </div>
//       </>
//      )
//     }
//     if(this.state.isloading){
//       post = <Spinner/>
//     }
//     if(this.state.error){
//    let   error = this.state.error.code ? this.state.error.code : this.state.error.name;
//       let errorMsg = this.state.error.message;
//       post = (
//         <>
//           <h2 className="red center1">{error}</h2>
//           <p className="errorMessage center1">{errorMsg}</p>
//         </>
//       );
//     }
    
//     return (
//       <div >
//        {post}
//       </div>
//     );
//   }
// }

// export default SingleBlog;







