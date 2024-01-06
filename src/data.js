import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Icon36LogoVk } from '@vkontakte/icons';

export const about_me =[
    {
        title: 'general',
        info : `My name is Aristide Jean Loens. Aged 23 years old. Born and Raised in Haiti. I completed my High school in the College Canado Haiti. And now I am currently majoring in Mathmatics and Computer Science at The RUDN university.`
    },
    {
        title: 'Competences',
        info: 'I master some technologies like HTML, CSS, JavaScript,React.js, Node.js, MongoDB and so on... In the projects section I listed some projects that can confirm my competence with those technologies. I have also a good background in terms of foreign languages since I master Haitian Creole, French and English. I also know the russian language not in an advanced level but I can conversate with russian native without problem.'
    },
    {
        title: 'goals',
        info: 'My goals are quite simple. Being the best in whatever I am doing. Try to bring something new to the world. And if I am smart enough, I would become a great scientist or engineer.'
    }
]


export const my_projects = [
    {
        title: 'MyPortfolio(This website)',
        link: '',
        source: 'kdjlfj',
        technologies:['React.js', 'material-ui']

    },
    {
        title: 'chat_app',
        link: 'klljljl',
        source:'kdlfk',
        technologies:['']
    },
    {
        title: 'Instagram_clone',
        link: 'klljljl',
        source:'kdlfk',
        technologies:['']
    },  
]


export const my_contacts = [
    {
        title: 'GitHub',
        Icon: <GitHubIcon fontSize='large' sx={{color:'orange'}}/>,
        link: '',
    },
    {
        title: 'WhatsApp',
        Icon: <WhatsAppIcon fontSize='large' sx={{color:'orange'}}/>,
        link: '',
    },
    {
        title: 'LinkedIn',
        Icon: <LinkedInIcon fontSize='large' sx={{color:'orange'}}/>,
        link: '',
    },
    {
        title: 'Gmail',
        Icon: <EmailIcon fontSize='large' sx={{color:'orange'}}/>,
        link: '',
    },
    {
        title: 'VK',
        Icon: <Icon36LogoVk color='orange'/>,
        link: '',
    },

]