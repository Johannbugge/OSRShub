import styles from './skills.module.css';
import Skill from './skill.js';

const Skills = (props) => {
    const skill_Name = [
        'Agility',
        'Construction',
        'Cooking',
        'Crafting',
        'Farming',
        'Firemaking',
        'Fishing',
        'Fletching',
        'Herblore',
        'Hunter',
        'Runecraft',
        'Slayer',
        'Smithing',
        'Thieving',
        'Woodcutting',
    ];

    const skill_Icon = [
        'Agility.png',
        'Construction.png',
        'Cooking.png',
        'Crafting.png',
        'Farming.png',
        'Firemaking.png',
        'Fishing.png',
        'Fletching.png',
        'Herblore.png',
        'Hunter.png',
        'Runecraft.png',
        'Slayer.png',
        'Smithing.png',
        'Thieving.png',
        'Woodcutting.png',
    ];

    const skillsss = [];

    for (let i = 0; i < skill_Name.length; i++) {
        skillsss.push({ name: skill_Name[i], imgUrl: skill_Icon[i], id: i });
    }
    const skills = props.skill_Name;
    return (
        <div>
            <h2 className={styles.title}>Skillguides</h2>
            <div className={styles.formatting}>
                {skillsss.map((pikk) => {
                    return <Skill skill={pikk}></Skill>;
                })}
            </div>
        </div>
    );
};

export default Skills;
