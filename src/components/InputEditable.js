import React from 'react';

export default function InputEditable({ searchOrg }) {
  let textSearch = '';
  const handleChangeInput = (event) => {
    textSearch = event.target.value;
  };

  const inputSubmit = () => {
    searchOrg(textSearch);
  };
  return (
    <div className="row">
      <div className="input-field col s10 center">
        <input
          id="searchBar"
          type="text"
          className="validate"
          style={styles.barSearch}
          onChange={handleChangeInput}
        />
        <label htmlFor="Search Organization Repository">
          Search Organization Repository
        </label>
      </div>
      <button
        className="btn waves-effect waves-light grey lighten-1 col s2"
        type="submit"
        name="action"
        style={styles.bottomSubmit}
        onClick={inputSubmit}
      >
        Submit
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
}
const styles = {
  bottomSubmit: {
    marginTop: '15px',
    height: '42px',
    borderRadius: '12px',
  },
  barSearch: {
    background: '#e0e0e0',
    borderRadius: '12px',
  },
};
