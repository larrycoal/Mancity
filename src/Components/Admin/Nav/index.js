import React from "react";
import { Link } from "react-router-dom";
import {ListItem} from "@material-ui/core"
import {firebase} from '../../../firebase'

const Nav = () => {
  const link = [
    {
      title: "Matches",
      linkTo: "/admin_matches",
    },
    {
      title: "Add Match",
      linkTo: "/admin_matches/add_match",
    },
    {
      title: "Players",
      linkTo: "/admin_players",
    },
    {
      title: "Add Players",
      linkTo: "/admin_players/add_player",
    },
  ];
  const style = {
      color:"#fff",
      fontWeight:"300",
      borderBottom: "1px solid #353535"
  }

  const showList= ()=>(
      link.map((link)=>(
           <Link to={link.linkTo} key={link.title}>
           <ListItem button style={style}>
               {link.title}
           </ListItem>
           </Link>
      ))
  )
  const handleSignOut =()=>{
     firebase.auth().signOut().then(
         ()=>{
             console.log("signed out")
         },
         (error)=>{
             console.log(error)
         }
     )
  }
  return (
      <div>
          {showList()}
          <ListItem button style={style} onClick={()=>handleSignOut()}>
               Sign Out
           </ListItem>
      </div>
  )
};

export default Nav;
