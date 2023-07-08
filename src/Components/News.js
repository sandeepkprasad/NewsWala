import React, { useEffect, useState } from "react";
import Card from "./Card";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState();
  const [loading, setLoading] = useState(true);

  const capitalise = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const getNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d2b68076bc4e4476bf00055af02f1fef&page=${page}&pageSize=6`;
    setLoading(true);
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  const nextNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&apiKey=d2b68076bc4e4476bf00055af02f1fef&page=${page + 1}&pageSize=6`;
    setLoading(true);
    setPage(page + 1);
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  const backNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&apiKey=d2b68076bc4e4476bf00055af02f1fef&page=${page - 1}&pageSize=6`;
    setLoading(true);
    setPage(page - 1);
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };
  return (
    <div className="container my-3">
      <h1
        className={`text-center text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        NewsWala - Top {capitalise(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <div className="row">
        {articles.map((ele) => (
          <div className="col-md-4" key={ele.url}>
            <Card
              mode={props.mode}
              source={ele.source.name}
              author={ele.author}
              title={ele.title}
              description={ele.description}
              url={ele.url}
              urlToImage={ele.urlToImage}
              publishedAt={ele.publishedAt}
            />
          </div>
        ))}
      </div>
      <div className="container d-flex justify-content-evenly my-3">
        <button
          disabled={page <= 1}
          type="button"
          className={`btn btn-${props.mode === "light" ? "dark" : "danger"}`}
          onClick={backNews}
        >
          &larr; Back
        </button>
        <button
          disabled={page >= Math.ceil(totalResults / 6)}
          type="button"
          className={`btn btn-${props.mode === "light" ? "dark" : "danger"}`}
          onClick={nextNews}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
