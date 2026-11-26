import { Theme } from './settings/types';
import { BirdDocumentaryWebsite } from './components/generated/BirdDocumentaryWebsite';

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return (
    <>
      <BirdDocumentaryWebsite />
    </>
  ); // %EXPORT_STATEMENT%
}

export default App;
