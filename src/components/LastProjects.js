import classes from './LastProjects.module.css';

import imgOne from '../UI/images/img-1.jpg';
import imgTwo from '../UI/images/img-2.jpg';

const LastProjects = () => {
    return (
        <main className={classes['main']}>
            <h3>our last projects</h3>
            <div className={classes['projects']}>
                <div className={classes['project']}>
                    <div className={classes['photo']}>
                        <img src={imgOne} alt='photo' />
                    </div>
                    <div className={classes['content-box']}>
                        <h4>title one</h4>
                        <p>
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpos
                        </p>
                        <button>read more</button>
                    </div>
                </div>
                <div className={classes['project-twist']}>
                    <div className={classes['photo']}>
                         <img src={imgTwo} alt='photo' />
                    </div>
                    <div className={classes['content-box']}>
                        <h4>title one</h4>
                        <p>
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpos
                        </p>
                        <button>read more</button>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default LastProjects;