import {
  redirect,
  useSearchParams,
  Form,
  Outlet,
  useNavigate,
} from "react-router-dom";

import "../search.css";

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const navagate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson);

    const search = formJson.search;

    if (!search) {
      navagate("/");
    } else {
      navagate("/search?search=" + search);
    }
  }

  const searchField = searchParams.has("search")
    ? searchParams.get("search")
    : "";

  return (
    <>
      <div className="container FlickrCtrl">
        {/* <ion-header-bar className="bar-dark"> </ion-header-bar> */}

        <div id="search-bar">
          <div className="item item-input-inset">
            <label className="item-input-wrapper" id="search-input">
              <i className="icon ion-search placeholder-icon"></i>
              <Form
                redirect="/search"
                className="row"
                id="greet-form"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <input
                  name="search"
                  type="text"
                  placeholder="Search YouTube"
                  defaultValue={searchField}
                  autoComplete="off"
                  className="form-search-input"
                />
              </Form>
            </label>
          </div>
        </div>
        <div className="clearfix mt-search">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
