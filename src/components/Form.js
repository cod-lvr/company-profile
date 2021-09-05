
import classes from './Form.module.css';

const Form = () => {
    return(
        <form className={classes['form']}>
            <label htmlFor='name'>Enter your Name</label>
            <input name='name' type='text' />
            <label htmlFor='email'>Enter your Email</label>
            <input name='email' type='email' />
            <label htmlFor='message'>Message</label>
            <textarea name='message' rows='5' cols='20' />
            <button className='btn'>send</button>
        </form>
    )
};

export default Form;