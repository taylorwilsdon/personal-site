import GitHubActivityLog from './Github';
import Header from './Header';
import Icons from './Icons';
import OpenSource from './OpenSource';

const Main = (props) => (
    <div>
    <section id="main">
        <Header />
        <OpenSource />
        <GitHubActivityLog username="taylorwilsdon" />
        <br />
        <Icons />
    </section>
    </div>
)

export default Main;
