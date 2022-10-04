import Main from '../../pages/main/main';

function App({ promoTitle, promoGenre, promoYear }: { promoTitle: string, promoGenre: string, promoYear: string}): JSX.Element {
  return <Main promoTitle={promoTitle} promoGenre={promoGenre} promoYear={promoYear}/>;
}

export default App;
