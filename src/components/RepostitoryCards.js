import React from 'react';

export default function RepostitoryCards({ repository }) {
  return (
    <div className="center" style={styles.grid}>
      {repository.map(
        ({ id, name, forks, language, stargazers_count, watchers, url }) => {
          return (
            <div style={styles.squareResults} className="card" key={id}>
              <div style={styles.flexCol}>
                <span style={styles.title}>{name}</span>
                <span>Language: {language}</span>
                <span>Fork: {forks}</span>
                <span>Stars: {stargazers_count}</span>
                <span>Watchers: {watchers}</span>

                <a style={styles.donwloadButtom} href={url + '/zipball/master'}>
                  Download Zip
                </a>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    color: 'black',
  },
  squareResults: {
    margin: '10px',
    fontSize: '12px',
    background: '#f0f0f0',
    borderRadius: '8px',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'Column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'red',
    fontFamily: 'Ubuntu',
  },
  donwloadButtom: {
    boxShadow: 'inset 0px 1px 0px 0px #ffffff',
    background: 'linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%)',
    backgroundColor: '#f9f9f9',
    borderRadius: '6px',
    border: '1px solid #dcdcdc',
    display: 'inline-block',
    cursor: 'pointer',
    color: '#666666',
    fontFamily: 'Arial',
    fontSize: '15px',
    fontWeight: 'bold',
    padding: '6px 24px',
    textDecoration: 'none',
    textShadow: '0px 1px 0px #ffffff',
  },
};
