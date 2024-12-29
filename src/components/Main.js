import Header from './Header';
import Icons from './Icons';
import GitHubActivityLog from './Github';

const Main = (props) => (
    <div>
    <section id="main">
        <Header />
        <GitHubActivityLog username="taylorwilsdon" />
        <Icons />
    </section>
    </div>
)

export default Main;