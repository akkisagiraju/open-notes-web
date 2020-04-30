function Layout({ children }) {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          max-width: 36rem;
          padding: 0 1rem;
          margin: 3rem auto 6rem;
        }
      `}</style>
    </div>
  );
}

export default Layout;
