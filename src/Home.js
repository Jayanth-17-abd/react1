import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="navbar">
        Home Page
      </div>

      <div className="content">
        <h1>Welcome to Home Page</h1>
        <p>This is a simple homepage designed using basic HTML & CSS.</p>

        <div className="box">
          <h2>Hello User 👋</h2>
          <p>Hope you have a great day!</p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
