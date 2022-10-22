function HeadGuest(): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8 /" />
        <title>WTW</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="css/main.min.css" />
      </head>

      <body>
        <section className="film-card">
          <div className="film-card__bg">
            <img src="img/bg-header.jpg" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <a href="sign-in.html" className="user-block__link">Sign in</a>
            </div>
          </header>

        </section>
      </body>
    </html>
  );
}

export default HeadGuest;
