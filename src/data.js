import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Icon36LogoVk } from '@vkontakte/icons';
import chatAppImg from './images/chatAppImg.png'
import instaLikeImg from './images/instaLikeImg.png'
import TelegramIcon from '@mui/icons-material/Telegram';

export const about_me =[
    {
        title: 'general',
        info : `My name is Aristide Jean Loens. Aged 23 years old. Born and Raised in Haiti. I completed my High school in the College Canado Haiti. And now I am currently majoring in Mathmatics and Computer Science at The RUDN university.`
    },
    {
        title: 'Competences',
        info: 'I master some technologies like HTML, CSS, JavaScript, typeScript, React.js, Node.js, MySQL, PostgreSQL, MongoDB, Postman and so on... In the projects section I listed some projects that can confirm my competence with those technologies. I have also a good background in terms of foreign languages since I master Haitian Creole, French and English. I also know the russian language in a B2 level.'
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
        frontend_link: '',
        backend_link:'',
        image:'',
        technologies:['React.js', 'material-ui']

    },
    {
        title: 'chat_app',
        link: 'https://i-ajlan.github.io/chat_app_frontEnd/',
        frontend_link:'https://github.com/i-ajlan/chat_app_frontEnd',
        backend_link:'https://github.com/i-ajlan/chat_app_api',
        image:chatAppImg,
        technologies:['react','vite','supabase', 'node', 'express', 'socket.io']
    },
    {
        title: 'Insta_like',
        link: 'https://i-ajlan.github.io/insta-like/',
        frontend_link:'https://github.com/i-ajlan/insta-like',
        backend_link:'',
        image:instaLikeImg,
        technologies:['React.js', 'vite', 'React-router-dom']
    },  
]


export const my_contacts = [
    {
        title: 'GitHub',
        Icon: <GitHubIcon fontSize='large' sx={{color:'orange'}}/>,
        link: 'https://github.com/i-ajlan',
    },
    {
        title: 'Telegram',
        Icon: <TelegramIcon fontSize='large' sx={{color:'orange'}}/>,
        link: 'https://t.me/ajlan_leo',
    },
    {
        title: 'VK',
        Icon: <Icon36LogoVk color='orange'/>,
        link: 'https://vk.com/id678759136',
    },

]