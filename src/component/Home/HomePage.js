import videoHomePage from "../../access/video-homepage.mp4";
const HomePages = () => {
  return (
    <div className="homepage-container">
      <div>
        <video autoPlay muted loop>
          <source src={videoHomePage} type="video/mp4" />
        </video>
      </div>
      <div className="homepage-content">
        <div className="title-heading">Forms that break the norm</div>
        <div className="title-body">
          Get more data—like signups, feedback, and anything else—with forms
          designed to be <b>refreshingly different.</b>
        </div>
        <div className="title-button">
          <button className="btn-body">Get's started-it's free</button>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
