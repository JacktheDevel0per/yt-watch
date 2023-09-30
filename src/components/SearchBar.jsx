import { useState } from "react";

function SearchBar() {
  const [text, setText] = useState("");

  return (
    <>
      <div className="container FlickrCtrl">
        {/* <ion-header-bar className="bar-dark"> </ion-header-bar> */}

        <div id="search-bar">
          <div className="item item-input-inset">
            <label className="item-input-wrapper" id="search-input">
              <i className="icon ion-search placeholder-icon"></i>
              <form className="row" id="greet-form">
                <input type="text" placeholder="Search YouTube" />
              </form>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
