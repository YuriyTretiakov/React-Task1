import { useForm } from "react-hook-form"
import propTypes from 'prop-types';
import Button from '../Button/Button';
import close from '../../assets/close.png'
import './ContactForm.css';

export default function ContactForm ({onClick}) {
    const methods = useForm();

    return (
        <div className='blackout' onClick={(e) => e.target.className === 'blackout' ? onClick() : null}>
            <div className='blackout-container'>
            <div className='close-button'>
                <img src={close} onClick={onClick}/>
            </div>
            <form className='contact-form'>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email' />
                </div>
                <div>
                    <label htmlFor='tel'>Телефон</label>
                    <input type='tel' name='tel' id='tel' />
                </div>
                <div className='comment'>
                    <label htmlFor='comment'>Сообщение</label>
                    <textarea cols='35' rows='3' name='message'/>
                </div>
                <div>
                    <Button className={'button-form'} label='Отправить' onClick={(e) => e.preventDefault}/>
                </div>
                
            </form>
            </div>
        </div>
    )
}

ContactForm.propTypes = {
onClick: propTypes.func
}