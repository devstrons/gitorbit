import React, { useState, useEffect, useRef } from "react";
import { removeDuplicates } from "./Util.js";
import render from './Image';
import config from "./Config.json";
// import "../styles/Data.scss";

export default function Data() {
  const APIURL = "https://api.github.com/users/";
  const [username, setUsername] = useState("imabp");
  const [followerdata, setFollowerData] = useState([]);
  const [followingdata, setFollowingData] = useState([]);
  const [data, setData] = useState([]);
  const [IMG, setImg] = useState(null);

  const cnvs = useRef();

  useEffect(() => {
    fetchUsername();
    fetchFollowers();
    fetchFollowing();
  }, []);

  useEffect(() => {
    const json = removeDuplicates([...followerdata, ...followingdata]);
    setData(json);
  }, [followerdata, followingdata]);

  async function fetchUsername() {
    const response = await fetch(APIURL + username, {
      method: "get",
      headers: new Headers({
        Authorization: "token " + config.TOKEN,
      }),
    });
    const json = await response.json();
    setUsername(json.login);
  }

  async function fetchFollowers() {
    const APIURL = "https://api.github.com/users/";
    const response = await fetch(APIURL + username + "/followers", {
      method: "get",
      headers: new Headers({
        Authorization: "token" + config.TOKEN,
      }),
    });

    const json = await response.json();
    setFollowerData(json);
  }

  async function fetchFollowing() {
    const response = await fetch(APIURL + username + "/following", {
      method: "get",
      headers: new Headers({
        Authorization: "token " + config.TOKEN,
      }),
    });

    const json = await response.json();
    setFollowingData(json);
  }

  async function main() {
    // const render = require("./Image");

    // this is how many users we will have for each layer from the inside out
    const layers = [8, 15, 26];

    // fetch the interactions
    // console.log(username);
    const data = removeDuplicates(username.toLowerCase(), layers);

    // console.log(layers, username.toLowerCase(), data);

    // render the image
    setImg(await render([
      { distance: 0, count: 1, radius: 110, users: [username] },
      // { distance: 200, count: layers[0], radius: 64, users: data[0] },
      // { distance: 330, count: layers[1], radius: 58, users: data[1] },
      // { distance: 450, count: layers[2], radius: 50, users: data[2] },
      { distance: 200, count: layers[0], radius: 64, users: [
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', /* 'amino19', 'imabp', */
        // 'paramsiddharth', 'amino19', 'imabp',
      ] },
      { distance: 330, count: layers[1], radius: 58, users: [
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', /* 'imabp', */
        // 'paramsiddharth', 'amino19', 'imabp',
        // 'paramsiddharth', 'amino19', 'imabp',
      ] },
      { distance: 450, count: layers[2], radius: 50, users: [
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', 'imabp',
        'paramsiddharth', 'amino19', 'imabp',
      ] },
    ]),
    cnvs.current
    );
  }

  main();

  console.log(IMG);

  return (
    <>
      <div>
        <ul>
          {data.map((item) => (
            <img
              className="img"
              src={item.avatar_url}
              alt="avatar img"
              key={item.id}
            ></img>
          ))}
        </ul>
        {
          IMG ? 
            <img src={IMG} />
          : ''
        }
        <canvas crossOrigin='anonymous' id='maincanvas' ref={cnvs} /* style={{ display: 'none' }} */></canvas>
      </div>
    </>
  );
}
