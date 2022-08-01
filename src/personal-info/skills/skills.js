import Marquee from "react-fast-marquee";
import { mainTheme } from '../../data/theme';

import './skills.scss'

export const skillsData = [
    'Сила',
    'Ловкость',
    'Плетения крючка',
    'Подсечка',
    'Бдительность',
    'Фидер',
    'Быстрая реакция',
    'По моєму клює'
]


const randBgColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor;
}

const Skills = ({skills}) => {
 
    return (

        <div id ="skills"className="skills" style={{backgroundColor: mainTheme.secondary}}>
            <div className="skillsHeader">
                <h2 style={{color: mainTheme.primary}}>Навыки рыбака</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={120} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                      
                        {skills.map((skill, id) => (
                            <div className="skill--box" key={id} style={{boxShadow: `0px 0px 30px ${randBgColor()}`, backgroundColor: mainTheme.secondary}}>
                                <img src={skill.img} alt={skill} />
                                <h3 style={{color: mainTheme.tertiary}}>
                                    {skill.name}
                                </h3>
                            </div>
                        ))}

                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills;