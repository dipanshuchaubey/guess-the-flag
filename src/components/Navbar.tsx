import { connect } from 'react-redux';

const Navbar = ({ score }: { score: any }) => {
  return (
    <nav id="navbar">
      <div className="nav-content">
        <h1>Guess The FLAG</h1>

        <ul>
          <li>
            <a href="#!">
              Score : {score.score}/{score.questionsAttempted}
            </a>
          </li>
          <li>
            <a href="#!">Correct : {score.correct}</a>
          </li>
          <li>
            <a href="#!">Wrong : {score.wrong}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state: { score: any }) => ({
  score: state.score
});

export default connect(mapStateToProps, {})(Navbar);
