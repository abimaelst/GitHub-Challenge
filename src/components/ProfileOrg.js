import React from 'react';

export default function ProfileOrg({ profile }) {
  return (
    <div style={styles.flexRow}>
      <img src={profile.avatar_url} alt="" style={styles.img} />
      <div style={styles.flexCol}>
        <span style={styles.title}>{profile.name}</span>

        <div style={styles.flexRow}>
          <div>
            <i style={styles.icons} className="small material-icons">
              add_location
            </i>
            <span style={styles.spans}>{profile.location}</span>
          </div>
          <div>
            <i style={styles.icons} className="small material-icons">
              work
            </i>
            <span style={styles.spans}>
              <a style={styles.linkStyle} href={profile.blog}>
                {profile.blog}
              </a>
            </span>
          </div>
          <div>
            <i style={styles.icons} className="small material-icons">
              email
            </i>
            <span style={styles.spans}>
              <a style={styles.linkStyle} href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '10px',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  img: {
    width: '100px',
    height: '100px',
  },
  title: {
    fontSize: '25px',
    fontFamily: 'Roboto',
    marginLeft: '10px',
  },
  icons: {
    marginRight: '4px',

    overflow: 'hidden',
    verticalAlign: 'middle',
  },
  spans: {
    marginRight: '10px',
  },
  linkStyle: {
    color: 'black',
  },
};
