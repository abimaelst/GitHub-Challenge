import React, { useEffect, useState } from 'react';
import * as api from './api/apiService';
import InputEditable from './components/InputEditable';
import ProfileOrg from './components/ProfileOrg';
import RepostitoryCards from './components/RepostitoryCards';
import ButtomNext from './components/ButtomNext';
import ButtomPrevious from './components/ButtomPrevious';

export default function App() {
  const [organization, setOrganization] = useState([]);
  const [repository, setRepository] = useState([]);
  const [orgSearch, setOrgSearch] = useState('camunda');
  const [page, setPage] = useState('1');
  const [maxPages, setMaxPages] = useState(0);

  useEffect(() => {
    const getRepos = async () => {
      const resultRepo = await api.getRepository('camunda', page);
      setRepository(resultRepo);
    };

    getRepos();

    // return () => {
    //   cleanup
    // }
  }, [page]);

  useEffect(() => {
    const getOrgs = async () => {
      const resultOrg = await api.getOrg(orgSearch);
      if (resultOrg) setOrganization(resultOrg);
      const max = Math.ceil(resultOrg.public_repos / 30);
      setMaxPages(max);
    };
    getOrgs();

    const getRepos = async () => {
      const resultRepo = await api.getRepository(orgSearch, page);
      const OrderResultRepo = resultRepo.sort((a, b) => {
        return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
      });
      setRepository(OrderResultRepo);
    };

    getRepos();
  }, [orgSearch, page]);

  const handleInput = (newOrgSearch) => {
    setOrgSearch(newOrgSearch);
  };

  const heandlePages = (numberPage) => {
    setPage(numberPage);
  };

  return (
    <div className=" center container">
      <h2>GitHub Search Organization</h2>
      <InputEditable searchOrg={handleInput} />
      {organization !== 404 ? (
        <ProfileOrg profile={organization} />
      ) : (
        <h3>Organization not found</h3>
      )}
      <div
        className="card-painel blue-grey darken-4"
        style={styles.repositoryBar}
      >
        <span
          className="white-text text-darken-2"
          style={styles.repositoryBar_Span}
        >
          Repositories
        </span>
      </div>
      {organization !== 404 && <RepostitoryCards repository={repository} />}
      {organization !== 404 && (
        <div style={styles.flexRow}>
          <ButtomPrevious
            currectPage={Number(page)}
            changePage={heandlePages}
          />
          <div className="btn-floating btn-medium waves-effect waves-light teal lighten-2">
            {page + '/' + maxPages}
          </div>
          <ButtomNext
            maxPages={maxPages}
            currectPage={Number(page)}
            changePage={heandlePages}
          />
        </div>
      )}
    </div>
  );
}
const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px',
    justifyContent: 'space-between',
  },
  repositoryBar: {
    marginTop: '10px',
    width: '100%',
    height: '50px',
    borderRadius: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  repositoryBar_Span: {
    fontSize: '25px',
    fontFamily: 'Roboto',
  },
};
