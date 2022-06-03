

import './skills.scss'
import Marquee from "react-fast-marquee";
import { mainTheme } from '../../data/theme';



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

const Skills = ({skills}) => {
    // console.log(skills)
    const skillBoxStyle = {
        backgroundColor: mainTheme.secondary,
        boxShadow: `0px 0px 30px ${mainTheme.primary30}`
    }

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
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skill.img} alt={skill} />
                                <h3 style={{color: mainTheme.tertiary}}>
                                    {skill.skill}
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