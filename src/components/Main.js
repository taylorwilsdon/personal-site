import GitHubActivityLog from './Github';
import Header from './Header';
import Icons from './Icons';
import Photography from './Photography';
const Main = (props) => (
    <div>
    <section id="main">
        <Header />
        <GitHubActivityLog username="taylorwilsdon" />
        <br />
        <Photography />
        <br />
        <Icons />
    </section>
    </div>
)

export default Main;
