import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import axios from "axios";
import { createMarkup } from "./functions";
import Headers from "components/Headers";
// import Login from "bookmark/Login";
import "./index.scss";

const App = (props) => {
  const [news, setNews] = useState<any>();
  const [hits, setHits] = useState<any>();
  const [loading, setLoading] = useState(true);
  const searchInputRef = useRef();
  const [current, setCurrent] = useState<number>(props.news ? props.news.page : 0);
  const [error, setError] = useState<string | null>();
  const [searchString, setSearchString] = useState("");
  let live = true;

  useEffect(() => {
    if (live) {
      // props.getNews({ searchString: 'microfrontend', page: 0 });
      FetchNews(searchString)
    }
    return () => {
      live = false;
    }
  }, []);

  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchString(event.currentTarget.value);
  }

  function submitQuery(e:React.SyntheticEvent<HTMLFormElement>) {
    console.log("submitQuery e: ",e.currentTarget)
  const element: HTMLInputElement = e.currentTarget.getElementsByTagName("INPUT")[0] as HTMLInputElement;
    e.preventDefault();
    if (element.value) {
      setCurrent(1);
      FetchNews(element.value);
    }
  }

  function clearInput() {
    setSearchString('');
  }

  async function FetchNews(searchValue) {
    setLoading(true);
    var response
    if (searchValue) {
      response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${searchValue}`);
    } else {
      response = await axios.get("http://hn.algolia.com/api/v1/search?query=microfrontends");
    }

    if (response.status !== 200) {
      setLoading(false);
      setError(response.statusText);
      
    } else {
      setLoading(false);
      setNews(response.data);
      setHits(response.data.hits);
    }
  }

  return (
    <div className="overflow-x-hidden overflow-y-hidden min-vh-100 min-vw-100 d-flex flex-column bg-gray-50">
      <Headers title="Developer News" submitQuery={submitQuery}/>
      
      {news ?
        <h2 className="p-0 m-0 text-center text-grey-darkest font-bolder lead">"{news.query}"</h2>
        : null}
      <div className='flex-grow px-2 py-4 my-2 overflow-y-scroll bg-white rounded-xl'>
        {/* <Login/> */}
        {loading ? <div className="font-bold text-orange-500 ">fetching results....</div> : <div className='p-2 bg-white '>
          <ul className='mx-1'>
            {hits ? hits.map((entry, i) => {
              return <li key={entry.objectID}>
                <div className="mb-4 border-t border-yellow-500 ">
                  {/* <pre>{JSON.stringify(entry, null, '\t')}</pre> */}
                  <div className="flex flex-col justify-between p-4 leading-normal bg-white border-gray-400 rounded-b hover:text-indigo-900 lg:rounded-b-none lg:rounded-r">
                    <div className="mb-2">

                      <div className="mb-2 text-xl font-bold text-gray-900">

                        {entry.title ?
                          <h6>
                            {entry.title}
                          </h6> : null
                        }
                        {entry.story_title ?
                          <h6>
                            {entry.story_title}
                          </h6> : null
                        }
                        <small className='text-gray-500'>
                          {(entry.url || entry.story_url) ? <a className='font-light text-yellow-500 align-baseline hover:text-yellow-800' href={(entry.url || entry.story_url)}>
                            {(entry.url || entry.story_url)}
                          </a> : null}
                          {/* {entry.url? <iframe width='100%' height="100%" src={entry.url} title={entry.title}></iframe>:null}
                                                    {entry.story_url ? <iframe width='100%' height="100%" src={entry.story_url} title={entry.story_title}></iframe>:null} */}
                        </small>
                        {/* <div className='flex my-1'>

                                            {entry._tags.length ? entry._tags.map(tag => <span key={tag} className="mr-1 badge badge-pill badge-primary">{tag}</span>) : null}
                                        </div> */}
                        <p className="text-sm text-yellow-700"
                        >Score: {entry.points}</p>

                      </div>
                      {entry.story_text ?
                        <p className="text-gray-600 "
                          dangerouslySetInnerHTML={createMarkup(entry.story_text)}
                        ></p>
                        : null
                      }
                      {entry.comment_text ?
                        <p className="text-gray-600 "
                          dangerouslySetInnerHTML={createMarkup(entry.comment_text)}
                        ></p>
                        : null
                      }
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <p className="text-gray-900 ">By: <strong>{entry.author}</strong>

                      </p>
                      <p className="text-gray-600">Date: {moment(entry.created_at).fromNow()}</p>
                    </div>

                  </div>
                  {/* <a className="text-indigo-600 rk hover:text-indigo-900" href={entry.url}> {`${i + 1}-${entry.title}`}</a> */}

                </div>
              </li>
            }) : null}
          </ul>
        </div>
        }
      </div>
      <div className="font-bold text-red-500">{error ? error : null}</div>
      
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
