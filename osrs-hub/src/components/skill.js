import logo from '../assets/Agility.png';
import styles from '../components/skill.module.css';

const Skill = (props) => {
    return (
        <div>
            <h2 className={styles.skillname}>{props.skill.name}</h2>
            <p></p>
        </div>
    );
};

export default Skill;
