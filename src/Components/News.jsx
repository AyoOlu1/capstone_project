import React, { useState, useEffect } from "react";

function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getNews();
    return;
  }, []);

  const getNews = async () => {
    const options = {
      method: "GET",
      // url: process.env.REACT_APP_CNBC_URL,
      // params: {
      //   tag: "Articles",
      //   count: "30",
      // },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_CNBC_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_CNBC_HOST,
      },
    };
    const url = new URL(process.env.REACT_APP_CNBC_URL);
    const params = { tag: "Articles", count: "30" };
    url.search = new URLSearchParams(params).toString();
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      // console.log(data.data.mostPopularEntries.assets);
      setData(() => data.data.mostPopularEntries.assets);
    } catch (error) {
      // console.error(error);
    }
  };

  function TruncateHeading({ sentence, css, limit }) {
    // Split the sentence into words
    const words = sentence.split(" ");

    // Check if the sentence exceeds 10 words
    if (words.length > limit) {
      // If it does, truncate it and add '...' at the end
      const truncatedSentence = words.slice(0, limit).join(" ") + "...";
      return <h2 className={css}>{truncatedSentence}</h2>;
    } else {
      // If it doesn't exceed 10 words, display it as is
      return <h2 className={css}>{sentence}</h2>;
    }
  }
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", marginTop: "60px" }}>News</h1>
        <div
        // style={{
        //   backgroundColor: "#F0F0F0",
        // }}
        >
          {data &&
            data
              .map((news) => (
                <div
                  key={news.id}
                  style={{
                    backgroundColor: "#F0F0F0",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    // maxHeight: "200px",
                    margin: "20px 16px",
                    maxWidth: "1000px",
                  }}
                >
                  {news.featuredMedia ? (
                    <img
                      src={news.featuredMedia.url}
                      height={150}
                      style={{
                        objectFit: "cover",
                        borderRadius: "12px 0px 0px 12px",
                      }}
                      alt="featured-img"
                    />
                  ) : (
                    <img
                      src="https://picsum.photos/seed/picsum/200/300"
                      alt="default-img"
                      // height={150}
                      // width={100}
                      style={{
                        borderRadius: "12px 0px 0px 12px",
                        width: "100px",
                      }}
                    />
                  )}
                  <div
                    style={{
                      padding: "0px 20px",
                    }}
                  >
                    <a
                      href={news.url}
                      style={{ color: "black", cursor: "pointer" }}
                      target="_blank"
                      rel="noreferrer"
                      className="news-h2-container"
                    >
                      {/* <h2 className="news-h2">{news.shorterHeadline}</h2> */}
                      <TruncateHeading
                        sentence={news.shorterHeadline}
                        css="news-h2"
                        limit={10}
                      />
                      <TruncateHeading
                        sentence={news.description}
                        css="news-p"
                        limit={16}
                      />
                      {/* <p className="news-p">{news.description}</p> */}
                    </a>
                  </div>
                </div>
              ))
              .slice(0, 9)}
        </div>
      </div>
    </>
  );
}

export default News;
