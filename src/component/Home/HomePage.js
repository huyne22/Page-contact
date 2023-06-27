import videoHomePage from "../../access/video-homepage.mp4";
const HomePages = () => {
  return (
    <video autoPlay muted loop>
      <source src={videoHomePage} type="video/mp4" />
    </video>
  );
};

export default HomePages;
