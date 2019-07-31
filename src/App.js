import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { searchGiphy } from './action/index';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}
const _App = ({ searchGiphy, data, loading }) => {
  const [search, setSearch] = useState('cheeseburger');
  const ramdomNum = data && data.data ? getRandomInt(data.data.length) : 0;
  if(loading){
    return <p>loading...</p>
  }
  return (
    <React.Fragment>
      <input name='search' value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button onClick={() => searchGiphy(search)}>Search</button>
      {data && data.data && <img src={data.data[ramdomNum].images['downsized'].url} alt='??' />}
    </React.Fragment>
  );
}

const mapDispatchToProps = {
  searchGiphy
}

const mapStateToProps = (state) => ({
  data: state.result,
  loading: state.loading
})

const App = connect(mapStateToProps , mapDispatchToProps)(_App);
export default App;
