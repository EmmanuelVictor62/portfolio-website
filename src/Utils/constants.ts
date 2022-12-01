import firstSlideImg from '../Images/man&laptop2.jpeg'
import secondSlideImg from '../Images/laptop.jpeg'
import thirdSlideImg from '../Images/laptopanddesktop.webp'
import GodsWillImg from '../Images/GodsWill.png'
import jetBrainsImg from '../Images/Jetbrain.png'
import formImg from '../Images/form.png'
import airbnbImg from '../Images/Airbnb.png'
import appleImg from '../Images/Apple.png'
import burgerKingImg from '../Images/BurgerKing.png'
import portfolioImg from '../Images/portfolio.png'
import JaneImg from '../Images/Jane.webp'

export const Link = [
    {
        linkName:'Home',
        href:'#home'
    },
    {
        linkName:'About',
        href:'#about'
    },
    {
        linkName:'Services',
        href:'#services'
    },
    {
        linkName:'Skills',
        href:'#skills'
    },
    {
        linkName:'Portfolio',
        href:'#portfolio'
    },
    {
        linkName:'Contact',
        href:'#contact'
    },
]

export const slideContent = [
    {
        backgroudImage:firstSlideImg,
        heading:[
            'Hello, I am Emmanuel',
            'A Frontend Developer',
            'And A Web Developer'
        ],
        description:`A Product Designer working at Facebook. 
        Separated they live in Bookmarksgrove right at the coast 
        of the Semantics, a large language ocean.`,
    },
    {
        backgroudImage:secondSlideImg,
        heading:[
            'Hello, I am Emmanuel',
            'A Frontend Developer',
            'And A Web Developer'
        ],
        description:`A Product Designer working at Facebook. 
        Separated they live in Bookmarksgrove right at the coast 
        of the Semantics, a large language ocean.`,
    },
    {
        backgroudImage:thirdSlideImg,
        heading:[
            'Hello, I am Emmanuel',
            'A Frontend Developer',
            'And A Web Developer'
        ],
        description:`A Product Designer working at Facebook. 
        Separated they live in Bookmarksgrove right at the coast 
        of the Semantics, a large language ocean.`,
    }
]

export const ServiceContent = [
    {
        title:'Web Development',
        description:`Lorem ipsum dolor sit amet consectetur elit. 
        Ipsa voluptatum ipsum, laudantium minima aliquam porro? 
        Iste, Et, esta ah`,
        icon:'fa-solid fa-code'
    },
    {
        title:'App Development',
        description:`Lorem ipsum dolor sit amet consectetur elit. 
        Ipsa voluptatum ipsum, laudantium minima aliquam porro? 
        Iste, Et, esta ah`,
        icon:'fa-solid fa-mobile-screen'
    },
    {
        title:'UI/UX Design',
        description:`Lorem ipsum dolor sit amet consectetur elit. 
        Ipsa voluptatum ipsum, laudantium minima aliquam porro? 
        Iste, Et, esta ah`,
        icon:'fa-solid fa-display'
    },
]


export const skillsIcon = [
    {
        iconName:'React',
        className:'fa-brands fa-react',
        iconColor:'#5ED3F3'
    },
    {
        iconName:'JavaScript',
        className:'fa-brands fa-square-js',
        iconColor:'#E6A328'
    },
    {
        iconName:'Angular',
        className:'fa-brands fa-angular',
        iconColor:'#DD0031'
    },
    {
        iconName:'Python',
        className:'fa-brands fa-python',
        iconColor:'#3A75A6'
    },
    {
        iconName:'Vue',
        className:'fa-brands fa-vuejs',
        iconColor:'#40B984'
    },
    {
        iconName:'WordPress',
        className:'fa-brands fa-wordpress',
        iconColor:'#2C8BAD'
    },
    {
        iconName:'NodeJS',
        className:'fa-brands fa-node',
        iconColor:'#7FC728'
    },
    {
        iconName:'HTML5',
        className:'fa-brands fa-html5',
        iconColor:'#DB4E25'
    },
    {
        iconName:'Git',
        className:'fa-brands fa-git-alt',
        iconColor:'#E84E32'
    },
    {
        iconName:'GitHub',
        className:'fa-brands fa-github',
        iconColor:'#000000'
    },
    {
        iconName:'Figma',
        className:'fa-brands fa-figma',
        iconColor:'#F87D7D'
    },
    {
        iconName:'Sass',
        className:'fa-brands fa-sass',
        iconColor:'#BA6191'
    }
]


export const flipBoxContent = [
    {
        img:GodsWillImg,
        heading:'Fully Responsive Church Website',
        description:`Lorem ipsum dolor sit amet consectetur 
        elit. Ipsa voluptatum ipsum, laudantium minima aliquam
        porro? Iste, Et, esta ah`,
        link:'https://dev-gods-will-pentecostal.pantheonsite.io/'
    },
    {
        img:jetBrainsImg,
        heading:'Responsive Jetbrain Clone Website',
        description:`Lorem ipsum dolor sit amet consectetur 
        elit. Ipsa voluptatum ipsum, laudantium minima aliquam
        porro? Iste, Et, esta ah`,
        link:'https://jetbrain-clone-project.vercel.app/'
    },
    {
        img:formImg,
        heading:'Fully Functional JQuery Form',
        description:`Lorem ipsum dolor sit amet consectetur 
        elit. Ipsa voluptatum ipsum, laudantium minima aliquam
        porro? Iste, Et, esta ah`,
        link:'https://extraordinary-meerkat-466b9f.netlify.app/'
    },
    {
        img:airbnbImg,
        heading:'Responsive Airbnb Clone Website',
        description:`Lorem ipsum dolor sit amet consectetur 
        elit. Ipsa voluptatum ipsum, laudantium minima aliquam
        porro? Iste, Et, esta ah`,
        link:'https://airbnb-clone-ashen-two.vercel.app/'
    },
    {
        img:appleImg,
        heading:'Fully Responsive Apple Clone Website',
        description:`Lorem ipsum dolor sit amet consectetur 
        elit. Ipsa voluptatum ipsum, laudantium minima aliquam
        porro? Iste, Et, esta ah`,
        link:'https://royalmanuelapple.netlify.app/'
    },
    {
        img:portfolioImg,
        heading:'My Portfolio Website',
        description:`Lorem ipsum dolor sit amet consectetur 
        elit. Ipsa voluptatum ipsum, laudantium minima aliquam
        porro? Iste, Et, esta ah`,
        link:''
    },
]

export const testimonialCardContent = [
    {
        name:'Sussie Dumond',
        content:`Lorem ipsum dolor sit amet consectetur elit. 
        Ipsa voluptatum ipsum, laudantium minima aliquam porro?
        Iste, Et, esta ah Lorem ipsum dolor sit amet consectetur elit. 
        Ipsa`,
        image:JaneImg
    },
    {
        name:'Jane Cole',
        content:`Lorem ipsum dolor sit amet consectetur elit. 
        Ipsa voluptatum ipsum, laudantium minima aliquam porro?
        Iste, Et, esta ah`,
        image:JaneImg
    },
    {
        name:'Jane Cole',
        content:`Lorem ipsum dolor sit amet consectetur elit. 
        Ipsa voluptatum ipsum, laudantium minima aliquam porro?
        Iste, Et, esta ah`,
        image:JaneImg
    },
]

export const contactField = [
    {
       name:'Phone',
       className:'fa-solid fa-phone',
       content:'+2347049011040' 
    },
    {
        name:'Email',
        className:'fa-solid fa-paper-plane',
        content:'royalmanuel62@gmail.com' 
    },
    {
        name:'Website',
        className:'fa-solid fa-phone',
        content:'+2347049011040' 
    },
]