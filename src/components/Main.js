import GitHubActivityLog from './Github';
import Header from './Header';
import Icons from './Icons';
const Main = (props) => (
    <div>
    <section id="main">
        <Header />
        <GitHubActivityLog username="taylorwilsdon" />
        <br />
        <Icons />
    </section>
    </div>
)

export default Main;
