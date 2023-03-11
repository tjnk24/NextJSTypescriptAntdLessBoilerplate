import {container, test} from './Page.module.less';

const Page = () => {
    return (
        <div className={container}>
            <span className={test}>test page</span>
        </div>
    );
};

export default Page;
