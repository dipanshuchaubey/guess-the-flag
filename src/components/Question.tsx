import getRandomCountry from '../services/getRandomCountry';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { SET_SCORE } from '../redux/types';

const dispatch = (option: boolean) => ({
  type: SET_SCORE,
  payload: { correct: option }
});

const Question = ({ score, dispatch }: { score: any; dispatch: any }) => {
  const [result, setResult] = useState('');
  const [country, setCountry] = useState([{ code: '', name: '' }]);
  const [details, setDetails] = useState({ options: 4, correct: 2 });
  const [next, setNext] = useState(false);

  useEffect(() => {
    setResult('');
    setNext(false);

    let correct = Math.floor(Math.random() * (details.options - 0 + 1)) + 0;
    if (correct >= 4) correct = 2;

    setDetails({ ...details, correct });

    const country = getRandomCountry(details.options);
    setCountry([...country]);

    return () => {
      setResult('');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [next]);

  const checkAnswer = ({ code, name }: { code: string; name: string }) => {
    if (name === country[details.correct].name) {
      setResult('You are correct!');
      dispatch(true);
    } else {
      setResult(`Wrong, It's ${country[details.correct].name}`);
      dispatch(false);
    }
  };

  if (country.length === 1) {
    return <>Loading...</>;
  }

  return (
    <div className="flex flex-col flex-center mt-1">
      <h2>Whose Flag is this?</h2>

      <img
        src={`https://flagcdn.com/w640/${country[details.correct].code}.png`}
        className="shadow img"
        alt="Name the flag"
        width="50%"
      />

      {result !== '' && (
        <b style={{ zIndex: 2 }} className="mt-1">
          {result}
        </b>
      )}

      <div className="options flex-center mt-1">
        <button
          disabled={result ? true : false}
          className="btn-danger"
          onClick={() => checkAnswer(country[0])}
        >
          <span>1. </span> {country[0].name}
        </button>
        <button
          disabled={result ? true : false}
          onClick={() => checkAnswer(country[1])}
        >
          <span>2. </span> {country[1].name}
        </button>
        <button
          disabled={result ? true : false}
          onClick={() => checkAnswer(country[2])}
        >
          <span>3. </span> {country[2].name}
        </button>
        <button
          disabled={result ? true : false}
          onClick={() => checkAnswer(country[3])}
        >
          <span>4. </span> {country[3].name}
        </button>
      </div>

      <button
        className="btn mt-2"
        onClick={() => {
          setNext(true);
        }}
      >
        Next Flag
      </button>
    </div>
  );
};

const mapStateToProps = (state: { score: any }) => ({
  score: state.score
});

export default connect(mapStateToProps, { dispatch })(Question);
