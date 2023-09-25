// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"

const styles = {
  header: {
    background: 'red',
    padding: '10px',
    textAlign: 'center'
  },

};

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  <header className="header" style={styles.header}>
  <h1 style={styles.h1}>Welcome</h1>
</header>
);
}



  return (
    <header className="header">
      <h1>Welcome</h1>
    </header>
  );
}


export default Header;
